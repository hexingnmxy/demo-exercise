<template>
    <div class="page-simple-container-column">
        <div class="swipe-card-item" v-if="isShowSwipeCardPage">
            <div class="swipe-card-wrapper">
                <div class="title">
                    请插入您要办理业务的<span class="high-light">身份证</span>
                </div>
                <div class="swipe-id-card-gif"></div>
            </div>
            <div class="page-buttons">
                <pa-button btn-size="max" btn-type="rectangle-full" @click.native="reSwipeCard()">重新刷卡</pa-button>
            </div>
        </div>
        <div class="swipe-id-card-result" v-else>
            <div class="swipe-id-card-up">
                <div class="id-card-info">
                    <div class="title">证件信息</div>
                    <div class="info">姓名：{{name}}</div>
                    <div class="info">证件类型：身份证</div>
                    <div class="info-cardNo">身份证号：{{cardNo}}</div>
                </div>
                <img :src="idCardPortraitImg" class="id-card-portrait">
            </div>
            <div class="swipe-id-card-down">
                证件信息确认无误后请点击下一步
            </div>
            <div class="page-buttons">
                <div class="page-buttons-left">
                    <pa-button btn-size="max" btn-type="rectangle-full" @click.native="reSwipeIdCard">重新读取</pa-button>
                </div>
                <pa-button btn-size="max" btn-type="rectangle-full" @click.native="toNextPage">下一步</pa-button>
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
        data() {
          return{
              name:"", // 身份证姓名
              cardNo:"", // 身份证号
              idCardPortraitImg:'', // 身份证头像
              isShowSwipeCardPage: true // 默认显示"刷身份证"
          }
        },
        mounted() {
            Device.openIdCard(this.openIdCard_callback, this); // 读取身份证
        },
        props:{
            // 刷完 点击'下一步'跳转到哪个路由
            toPageRoute: String,
            isToUploadPhotos:{
                type: Boolean,
                default(){
                    return false;
                }
            }
        },
        methods:{
            // 读取ID卡的回调
            openIdCard_callback(result){
                Store.state.idCardInfo = result.idCardInfo;
                this.name = result.idCardInfo.fullName;
                this.cardNo = Core.stringEncrypted(result.idCardInfo.idNo, 6, 4);
                this.idCardPortraitImg = `data:image/jpg;base64,${result.idCardInfo.photodata}`;
                this.isShowSwipeCardPage = false; // 显示刷身份证结果页
            },
            // 刷身份证页面的"重新刷卡"按钮
            reSwipeCard() {
                Device.openIdCard(this.openIdCard_callback, this); // 读取身份证
            },
            // 身份证结果页面的"重新读取"按钮
            reSwipeIdCard() {
                this.isShowSwipeCardPage = true;
                Device.openIdCard(this.openIdCard_callback, this); // 读取身份证
            },
            // 跳转到下一页
            toNextPage(){
                this.checkIdInfo(); // 联网核查身份证信息
            },
            // 联网核查身份证信息
            checkIdInfo() {
                let idCardInfo = Store.state.idCardInfo;
                let bankCardInfo = Store.state.bankCardInfo;
                let params = {
                    BusinessJnlNo   : Store.state.BusinessJnlNo,                        //业务流水号
                    IdNo            : idCardInfo.idNo,                      //证件号码
                    CifName         : idCardInfo.fullName,                  //客户名称
                    IdType          : '1',                                       //证件类型
                    Sex             : (idCardInfo.sex == 1) ? 'M' : 'F',    //客户性别
                    BirthDate       : idCardInfo.birthday,                  //出生日期
                    Nation          : idCardInfo.nation,                    //民族
                    Address         : idCardInfo.idAddr,                    //地址
                    IdIssuer        : idCardInfo.idOrg,                     //证件签发机关
                    IssDate         : idCardInfo.beginDate,                 //证件签发日期
                    ExpiryDate      : idCardInfo.endDate,                   //证件到期日
                    IdHeadPhoto     : idCardInfo.photodata,                 //身份证头像
                    CardNo          : bankCardInfo.cardNo                     //卡号
                };
                Ui.loading(true, '正在核查信息');
                Axios.post({
                    url: Api.safetySign.SafeLockIdentityCheck,
                    params: params,
                    success: this.checkIdInfoSuccess,
                    error(e){
                        Ui.popBox(true, {text: e});
                    }
                });
            },
            // 联网核查身份证信息 -- 成功回调
            checkIdInfoSuccess(res) {
                Store.state.checkIDRes = res; // 全局保存 联网核查接口返回的数据
                if (res.VerifyResult === '00'|| res.VerifyResult === '01') { // 联网核查通过
                    let toPageRoute = this.toPageRoute;
                    if(this.isToUploadPhotos) { // 需要进入"上传身份证页面"
                        Core.toPage({name: 'UploadPhotos', params:{toPageRoute}});
                    }else {
                        Core.toPage({name: toPageRoute});
                    }
                }else {
                    Ui.popBox(true, {text: res.VerifyFailMsg});
                }
            }
        },
        components: {
            PaButton,
            PaPageUploadPhotos
        }
    }
</script>
