<template>
    <div class="page-simple-container-column">
        <div class="swipe-card-item">
            <div class="swipe-card-wrapper">
                <div class="title">
                    请插入您要办理业务的<span class="high-light">银行卡</span>
                </div>
                <div class="swipe-bank-card-gif"></div>
            </div>
            <div class="page-buttons">
                <pa-button btn-size="max" btn-type="rectangle-full" @click.native="reSwipeCard()">重新刷卡</pa-button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import "./style.less";
</style>
<script>
    import PaButton from 'pa-ui/components/button';
    import PaPageUploadPhotos from '../page-upload-photos';

    export default{
        mounted() {
            Device.openIcCard(this.openIcCard_callback); // 读取银行卡
        },
        props:{
            // 刷完 点击'下一步'跳转到哪个路由
            toPageRoute: String
        },
        methods:{
            // 读取IC卡的回调
            openIcCard_callback(data) {
                Store.state.bankCardInfo = data.bankCardInfo; // 保存到全局
                let bankCardInfo = data.bankCardInfo;
                // “密码输入”对话框  参数
                let param = {
                    style           : '0002',
                    num             : "101",
                    title           : '输入密码',
                    AlgorithmCode   : "101",
                    type            : "2",
                    size            : "6",
                    maxSize         : "6",
                    info_title      : "您要办理业务的银行卡：",
                    info_message    : '' // 银行卡卡号
                };
                param.info_message = Core.stringEncrypted(bankCardInfo.cardNo, 6, 4);
                param = JSON.stringify(param);
                Device.showPwdKeyboard(param, this.writePwd_callback);
            },
            // 读取IC卡的回调 ---- 输入完密码的回调
            writePwd_callback(argArray){
                /*
                 *  flag "000000":点击"确定"按钮; "000001":点击"取消"按钮
                 *  len 弹出框的密码密码长度
                 * */
                let flag = argArray[0];
//                let len = argArray[1];
                let bankCardInfo = Store.state.bankCardInfo;
                let params = {
                    CardNo          : bankCardInfo.cardNo,  // 卡号
                    CardType        : bankCardInfo.cardType,               //卡类型
                    ICSerialNumber  : bankCardInfo.iCSerialNumber,         //IC卡序列号
                    IcSysDataMsg    : bankCardInfo.icSysDataMsg,           //IC卡55域内容
                    TwoTrackMsg     : bankCardInfo.twoTrackMsg,            //二磁道
                    ThreeTrackMsg   : bankCardInfo.threeTrackMsg           //三磁道
                };
                let _this = this;
                if(flag === '000000'){
                    Ui.loading(true, "正在验证密码");
                    Axios.checkPwdPost({
                        url: Api.safetySign.SafeLockPasswordCheck,
                        params: params,
                        success(){ // 方面里面的this需要用_this替代
                            Core.toPage({name: _this.toPageRoute}); // 跳转到刷身份证页面
                        },
                        error(e){
                            Ui.popBox(true, {text: `${e.url}： ${e.status}`});
                        }
                    });
                }
            },
            // 重新刷卡
            reSwipeCard() {
                Device.openIcCard(this.openIcCard_callback); // 读取银行卡
            }
        },
        components: {
            PaButton,
            PaPageUploadPhotos
        }
    }
</script>
