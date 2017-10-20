<!-- 签约设置 -->
<template>
    <div class="page">
        <div class="page-container-column">
            <div class="user-info" id="user-info">
                <div class="card-no">
                    <pa-icon iconType="bank-card" iconClass="bank-card-icon"></pa-icon>卡号：{{cardNo}}
                </div>
                <div class="user-name">
                    <pa-icon iconType="user" iconClass="user-icon"></pa-icon><span>姓名：{{name}}</span>
                </div>
            </div>
            <div class="contract-set">
                <div class="title">
                    <span class="left">借记卡安全锁协议设置</span><span class="right">签约状态：{{signStatus}}</span>
                </div>
                <div class="line"></div>
                <div class="content">
                    <div class="item">
                        <div class="name">操作：</div>
                        <pa-radio v-model="handleModel" pa-value="A" :disabled="hasSigned">新增</pa-radio>
                        <pa-radio v-model="handleModel" pa-value="M" :disabled="!hasSigned">变更</pa-radio>
                        <pa-radio v-model="handleModel" pa-value="D" :disabled="!hasSigned">删除</pa-radio>
                    </div>
                    <div class="item" v-show="!isDeleteHandle">
                        <div class="name">交易类型：</div>
                        <pa-checkbox pa-value="cash" v-model="tranTypeModel">现取</pa-checkbox>
                        <pa-checkbox pa-value="transfer" v-model="tranTypeModel">转账</pa-checkbox>
                        <pa-checkbox pa-value="consume" v-model="tranTypeModel">消费</pa-checkbox>
                        <span class="select-tip">（可点选多项）</span>
                        <div class="error-tip" v-show="isShowTranTypeError">请至少勾选一项</div>
                    </div>
                    <div class="item" v-show="!isDeleteHandle">
                        <div class="name">渠道：</div>
                        <pa-checkbox pa-value="ATM" v-model="channelModel">ATM</pa-checkbox>
                        <pa-checkbox pa-value="POS" v-model="channelModel">POS</pa-checkbox>
                        <span class="select-tip">（可点选多项）</span>
                        <div class="error-tip" v-show="isShowChannelError">请至少勾选一项</div>
                    </div>
                    <div class="item" v-show="!isDeleteHandle">
                        <div class="name">用卡介质：</div>
                        <pa-checkbox pa-value="chip" v-model="cardTypeModel">IC芯片</pa-checkbox>
                        <pa-checkbox pa-value="stripe" v-model="cardTypeModel">磁条</pa-checkbox>
                        <span class="select-tip">（可点选多项）</span>
                        <div class="error-tip" v-show="isShowCardTypeError">请至少勾选一项</div>
                    </div>
                    <div class="item" v-show="!isDeleteHandle">
                        <div class="name">地区：</div>
                        <pa-checkbox pa-value="inland" v-model="districtModel">境内</pa-checkbox>
                        <pa-checkbox pa-value="outland" v-model="districtModel">境外</pa-checkbox>
                        <span class="select-tip">（可点选多项）</span>
                        <div class="error-tip" v-show="isShowDistrictError">请至少勾选一项</div>
                    </div>
                    <div class="item" v-show="!isDeleteHandle">
                        <div class="name">时间：</div>
                        <span class="time-text">每日</span>
                        <pa-input placeholder="请输入内容" v-model="startTime" maxlength="30"></pa-input>
                        <span class="short-line">—</span>
                        <pa-input placeholder="请输入内容" v-model="endTime" maxlength="30"></pa-input>
                        <div class="error-tip" v-show="isShowPeriodOfTimeError">请选择一个有效的时间段</div>
                    </div>
                    <div class="item" v-show="!isDeleteHandle">
                        <div class="name">额度：</div>
                        <div class="limit">
                            <pa-input placeholder="请输入内容" v-model="limit" maxlength="30"></pa-input>
                        </div>
                        <span class="limit-text">{{limitText}}</span>
                        <div class="error-tip" v-show="isShowLimitError">请输入一个大于0的金额</div>
                    </div>
                </div>
               </div>
            <div class="page-buttons">
                <div>
                    <pa-button btn-size="max" btn-type="rectangle-full" @click.native="toNextPage">下一步</pa-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import "./contractSet.less";
</style>
<script>
    import PaButton from 'pa-ui/components/button';
    import PaInput from 'pa-ui/components/input'
    import PaRadio from 'pa-ui/components/radio';
    import PaCheckbox from 'pa-ui/components/checkbox';
    import PaIcon from 'pa-ui/components/icon';

    export default {
        data () {
            return {
                hasSigned:"", // 签约状态
                inputValueNoClearModel: '',
                handleModel: '', // 操作
                isDeleteHandle: false, // 是否操作类型为删除 默认否
                tranTypeModel: [], // 交易类型
                channelModel: [], // 渠道
                cardTypeModel: [], // 用卡介质
                districtModel: [], // 地区
                startTime: '', // 开始时间
                endTime: '', // 结束时间
                limit: '', // 额度
                cardNo: Core.stringEncrypted(Store.state.bankCardInfo.cardNo, 6, 4), // 银行卡号
                name: Core.stringEncrypted(Store.state.idCardInfo.fullName, 1, 1), // 用户姓名
                isShowTranTypeError: false,
                isShowChannelError: false,
                isShowCardTypeError: false,
                isShowDistrictError: false,
                isShowPeriodOfTimeError: false, // 时间段 错误提示
                isShowLimitError: false // 额度 错误提示
            };
        },
        mounted(){
            this.initData(); // 初始化页面数据
        },
        computed:{
            signStatus() {
                return this.hasSigned ?"有效":"未设置";
            },
            // 额度提示
            limitText() {
                return Core.amountInWords(this.limit);
            }
        },
        methods:{
            toNextPage(){
                let tranTypeStr = ''; // 交易类型
                if(this.tranTypeModel.indexOf("cash")>-1) { tranTypeStr += '1';}else {tranTypeStr += '0';}
                if(this.tranTypeModel.indexOf("transfer")>-1) { tranTypeStr += '1';}else {tranTypeStr += '0';}
                if(this.tranTypeModel.indexOf("consume")>-1) { tranTypeStr += '1';}else {tranTypeStr += '0';}

                let channelCodeStr = ''; // 渠道
                if(this.channelModel.indexOf("ATM")>-1) { channelCodeStr += '1';}else {channelCodeStr += '0';}
                if(this.channelModel.indexOf("POS")>-1) { channelCodeStr += '1';}else {channelCodeStr += '0';}

                let cardTypeStr = ''; // 用卡介质
                if(this.cardTypeModel.indexOf("chip")>-1) { cardTypeStr += '1';}else {cardTypeStr += '0';}
                if(this.cardTypeModel.indexOf("stripe")>-1) { cardTypeStr += '1';}else {cardTypeStr += '0';}

                let regionNoStr = ''; // 地区
                if(this.districtModel.indexOf("inland")>-1) { regionNoStr += '1';}else {regionNoStr += '0';}
                if(this.districtModel.indexOf("outland")>-1) { regionNoStr += '1';}else {regionNoStr += '0';}

                let params = {
                    BusinessJnlNo: Store.state.BusinessJnlNo,
                    CardNo: Store.state.bankCardInfo.cardNo,
                    OperationFlag: this.handleModel,
                    TranType: tranTypeStr,
                    ChannelCode: channelCodeStr,
                    CardType: cardTypeStr,
                    RegionNo: regionNoStr,
                    StartTime: '09:00',
                    EndTime: '12:00',
                    LimitAmt: '100.00'
                };
                if(this.isParamsRight(params)){ // 校验数据,并弹出对应错误提示
                    let _this = this;
                    Ui.loading(true, '正在保存信息');
                    Axios.post({
                        url: Api.safetySign.SafeLockInfoSave,
                        params: params,
                        success(){
                            Device.setBusinessJnlNo(Store.state.BusinessJnlNo);//给设备传递当前流水号
                            Device.setBusninessID(Store.state.PrdId);//给设备传递当前业务ID
                            Device.startAuthService(_this.counterCallback); // 审核后回调
                        },
                        error(e){
                            Ui.popBox(true, {text: e});
                        }
                    });
//                    let resultStatus = 'fail';
//                    let resultText = '抱歉！交易失败，请咨询银行工作人员，欢迎再次使用远程柜面服务！';
//                    Core.toPage({name:"Result", params: {resultStatus,resultText}});
                }
            },
            // 初始化页面数据
            initData(){
                if(Store.state.checkIDRes.Flag === "0") { // 未签约过
                    this.hasSigned = false;
                    this.handleModel = "A";
                }else { // 签约过 -- 初始化"操作"以下的页面数据
                    this.hasSigned = true;
                    this.handleModel = "M";
                    this.initSignedData();
                }
            },
            // 签约过 -- 初始化"操作"以下的页面数据
            initSignedData(){
                this.tranTypeModel = []; // 交易类型
                this.channelModel = []; // 渠道
                this.cardTypeModel = []; // 用卡介质
                this.districtModel = []; // 地区

                let tranType = Store.state.checkIDRes.TranType; // 交易类型
                if(tranType[0]==="1"){ this.tranTypeModel.push("cash");}
                if(tranType[1]==="1"){ this.tranTypeModel.push("transfer");}
                if(tranType[2]==="1"){ this.tranTypeModel.push("consume");}

                let channelCode = Store.state.checkIDRes.ChannelCode; // 渠道
                if(channelCode[0]==="1"){ this.channelModel.push("ATM");}
                if(channelCode[1]==="1"){ this.channelModel.push("POS");}

                let cardType = Store.state.checkIDRes.CardType; // 用卡介质
                if(cardType[0]==="1"){ this.cardTypeModel.push("chip");}
                if(cardType[1]==="1"){ this.cardTypeModel.push("stripe");}

                let regionNo = Store.state.checkIDRes.RegionNo; // 地区
                if(regionNo[0]==="1"){ this.districtModel.push("inland");}
                if(regionNo[1]==="1"){ this.districtModel.push("outland");}

                this.isShowTranTypeError = false; // 交易类型 错误提示
                this.isShowChannelError = false; // 渠道 错误提示
                this.isShowCardTypeError = false; // 用卡介质 错误提示
                this.isShowPeriodOfTimeError = false; // 时间段 错误提示
                this.isShowLimitError = false; // 额度 错误提示
            },
            // 校验数据,并弹出对应错误提示
            isParamsRight(params) {
                let isRight = true; // 默认是正确的
                if(params.TranType === "000"){
                    this.isShowTranTypeError = true;
                    isRight = false;
                }
                if(params.ChannelCode === "00"){
                    this.isShowCardTypeError = true;
                    isRight = false;
                }
                if(params.CardType === "00"){
                    this.isShowChannelError = true;
                    isRight = false;
                }
                if(params.RegionNo === "00"){
                    this.isShowDistrictError = true;
                    isRight = false;
                }
//                if(params.limit) this.isShowPeriodOfTimeError = true;
                if(params.limit){
                    this.isShowLimitError = true;
                    isRight = false;
                }
                return isRight;
            },
            // 输完审核码回调
            counterCallback(argArray) {
                let code = argArray[0];
//                let resultMsg = argArray[1];
                switch(code) {
                    case 'P0001':// 审核通过
                        this.counterSubmit();
                        break;
                    case 'P0002':// 审核失败
                        let resultStatus = 'fail';
                        let resultText = '抱歉！交易失败，请咨询银行工作人员，欢迎再次使用远程柜面服务！';
                        Core.toPage({name:"Result", params: {resultStatus,resultText}});
                        break;
                }
            },
            // 审核通过回调
            counterSubmit() {
                Ui.loading(true, '正在提交');
                Axios.post({
                    url: Api.safetySign.SafeLockSubmit,
                    params: {BusinessJnlNo: Store.state.BusinessJnlNo},
                    success(){
                        let resultStatus = 'success';
                        let resultText = '交易成功！尊敬的客户，您的业务已办理成功，欢迎再次使用远程柜面！';
                        Core.toPage({name:"Result", params: {resultStatus,resultText}});
                    },
                    error(e){
                        Ui.popBox(true, {text: e});
                    }
                });
            }
        },
        watch: {
            // 操作 变更、删除之间的切换
            handleModel(newVal, oldVal) {
                if(newVal === "D") { // 隐藏选择 并初始化页面数据
                    this.initSignedData();
                    this.isDeleteHandle = true;
                }else { // 显示选择
                    this.isDeleteHandle = false;
                }
            },
            // 交易类型
            tranTypeModel(newVal, oldVal) {
                if(newVal.length > 0) this.isShowTranTypeError = false;
            },
            // 渠道
            channelModel(newVal, oldVal) {
                if(newVal.length > 0) this.isShowChannelError = false;
            },
            // 用卡介质
            cardTypeModel(newVal, oldVal) {
                if(newVal.length > 0) this.isShowCardTypeError = false;
            },
            // 地区
            districtModel(newVal, oldVal) {
                if(newVal.length > 0) this.isShowDistrictError = false;
            }
        },
        components: {
            PaButton,
            PaInput,
            PaRadio,
            PaCheckbox,
            PaIcon
        }
    }
</script>
