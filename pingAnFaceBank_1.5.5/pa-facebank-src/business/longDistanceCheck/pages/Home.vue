<template>
    <div class="page">
        <div class="page-container" id="page-auth">
            <div class="auth-panel">
                <div class="auth-person">
                    <div class="auth-person-left">
                        <pa-icon icon-type="customer"></pa-icon>
                    </div>
                    <div class="auth-person-center">
                        <div class="line-wait" v-if="isIntactLine">
                            <div class="auth-line-wait"></div>
                            <div class="auth-line-loading" id="auth-line-loading" v-show="authLineLoadingShow"></div>
                        </div>
                        <div class="line" v-else>
                            <div class="auth-line"></div>
                            <pa-icon  icon-type="network-unusual"></pa-icon>
                            <div class="auth-line"></div>
                        </div>
                        <div class="text" id="auth-msg">{{authMsgText}}</div>
                    </div>
                    <div class="auth-person-right">
                        <pa-icon icon-type="server" ></pa-icon>
                    </div>
                </div>
                <div class="input-item">
                    <div class="input-item-text">UM账号：</div>
                    <pa-input slot="source" placeholder="请输入远程呼叫UM账号" v-model="umInputModel" maxlength="30"
                              error-tip="请输入正确值" :disabled="umInputDisable"
                    ></pa-input>
                    <div style="margin-left: .2rem">
                        <pa-button btn-size="min" btn-type="rectangle-empty-theme" @click.native="umCheckBtnClick">{{umCheckBtnText}}</pa-button>
                    </div>
                </div>
                <div class="auth-tip">
                    <pa-icon icon-type="light" ></pa-icon>移动至光线充足的位置
                    <pa-icon icon-type="invisibility" style="margin-left: 1.3rem"></pa-icon>请勿遮挡面部
                </div>
                <div class="auth-panel-bottom">
                    <pa-button btn-size="min" btn-type="rectangle-empty-theme" :disabled="callBtnDisabled" @click.native="callBtnClick">{{callBtnText}}</pa-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Server } from '../../common/option';
    import PaInput from 'pa-ui/components/input';
    import PaButton from 'pa-ui/components/button';
    import PaIcon from 'pa-ui/components/icon';

    export default {
        data () {
            return {
                umInputModel: '', // um账号输入框
                umInputDisable: false, // um账号输入框 禁用状态
                callBtnDisabled: true, // "视频呼叫"按钮状态
                umCheckBtnText: '核查', // 核查um按钮
                callBtnText: '视频呼叫', // "呼叫"按钮
                isIntactLine: true, // 初始状态：完好的线
                authMsgText: '', // 横线下面的提示语
                authLineLoadingShow: false // 呼叫中，加载条是否显示
            }
        },
        mounted(){
            this.$store.state.loadingPopText = '检查UM账号';
        },
        components: {
            PaInput,
            PaButton,
            PaIcon
        },
        methods: {
            // 点击"核查"/"修改"按钮
            umCheckBtnClick() {
                if(this.umInputDisable){ // um账号输入框是禁止状态，那么当前是修改
                    this.umCheckBtnText = '核查';
                    this.umInputDisable = false;
                    this.callBtnDisabled = true; // "视频呼叫"按钮状态--不可呼叫
                }else {
                    let params = {
                        CheckUserId: this.umInputModel
                    };
                    let _this = this;
                    this.$store.state.loadingPopDisabled = false; // 显示loading弹框
                    this.$core.post(Server.longDistanceCheck.CheckUmId, params, this).then((res)=>{
                        this.$store.state.loadingPopDisabled = true; // 显示loading弹框
                        _this.$store.state.BusinessJnlNo = res.BusinessJnlNo;
                        _this.umCheckBtnText = '修改';
                        _this.umInputDisable = true; // um账号输入框禁止输入
                        _this.callBtnDisabled = false; // "视频呼叫"按钮状态--可呼叫
                    }, (error)=>{ // 404之类的错误
                        _this.$store.state.loadingPopDisabled = true; // 隐藏loading弹框
                        _this.callBtnDisabled = false; // "视频呼叫"按钮状态--可呼叫

                        _this.$store.state.popBoxDisabled = false; // 普通弹框--显示
                        _this.$store.state.popBoxText = `${error.url}： ${error.status}`; // 普通弹框--文字
                    });
                }
            },
            // 点击"视频呼叫"按钮
            callBtnClick() {
                if(!this.callBtnDisabled) { // 可以呼叫
                    if(this.callBtnText === '视频呼叫'||this.callBtnText === '重新呼叫') {
                        this.isIntactLine = true;
                        this.authLineLoadingShow = true;
                        this.authMsgText = '业务申请已经提交，正在为您接通客服代表...';
                        this.callBtnText = '取消呼叫';
                        this.$device.setBusinessJnlNo(this.$store.state.BusinessJnlNo);
                        this.$device.setBusninessID(Server.longDistanceCheck.proId);
                        this.$device.longDistanceOpenAuth(this.auth_callback, (this.umInputModel).toUpperCase());
                        this.callBtnDisabled = true;
                        let _this = this;
                        setTimeout(()=>{ // 3秒内不能让其再点击
                            _this.callBtnDisabled = false;
                        }, 3000);
                    }else { // this.callBtnText === '取消呼叫'
                        this.isIntactLine = false;
                        this.authMsgText = '您已取消呼叫';
                        this.callBtnText = '重新呼叫';
                        this.$device.stopAuth(); // 取消呼叫
                        this.callBtnDisabled = true;
                        let _this = this;
                        setTimeout(function () {
                            _this.callBtnDisabled = false;
                        }, 3000)
                    }
                }
            },
            //视频模块回调
            //code : "P0001"; // 审核通过
            //code : "P0002"; // 审核失败
            //code : "P0003"; // 业务中断
            //此方法会触发两次，第一次返回测评结果code,第二次返回测评提交成功code
            auth_callback(code, msg) {
                switch (code) {
                    case 'P0000'://
                        break;
                    case 'P0001':// 审核通过,保存测评
                        break;
                    case 'P0002':// 审核失败
                        break;
                    case 'PH000':// 视频连接提示  1.没有坐席 2.坐席正在通话
                        this.isIntactLine = false; // 中间线断开
                        this.authMsgText = msg;
                        this.callBtnText = '重新呼叫';
                        break;
                    // 新增
                    case 'PH001':// 视频呼叫等候  定点呼叫是没有排队的情况
                        break;
                    case 'PH002':// 视频禁止点击呼叫
                        break;
                    case 'PH003':
                        break;
                }
            }
        }
    }
</script>
