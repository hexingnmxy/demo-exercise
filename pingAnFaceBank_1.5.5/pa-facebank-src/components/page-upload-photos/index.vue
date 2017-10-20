<template>
  <div class="upload-photos-wrapper">
    <div class="id-item">
      <div class="left">
        <div class="photo-wrapper" @click="photographCard(1)">
          <div class="photograph" v-show="isShowFrontCamera"><pa-icon iconType="photograph"></pa-icon></div>
          <div class="uploading-wrapper" v-show="isShowUpLoadingFront"><div class="content" :style="{width:upLoadingValue}"></div></div>
          <div class="photo" v-show="!idCardFrontDatabase64"></div>
          <img class="photo-img" v-show="idCardFrontDatabase64" :src="idCardFrontDatabase64"/>
        </div>
        <div class="text" >身份证人像面</div>
      </div>
      <div class="right">
        <div class="photo-wrapper" @click="photographCard(2)">
          <div class="photograph" v-show="isShowReverseCamera"><pa-icon iconType="photograph"></pa-icon></div>
          <div class="uploading-wrapper" v-show="isShowUpLoadingReverse"><div class="content" :style="{width:upLoadingValue}"></div></div>
          <div class="photo" v-show="!idCardReverseDatabase64"></div>
          <img class="photo-img" v-show="idCardReverseDatabase64" :src="idCardReverseDatabase64"/>
        </div>
        <div class="text">身份证国徽面</div>
      </div>
    </div>
    <div class="company-item">
      <div class="item">
        <!--  生成的html如下  -->
        <!--<div class="photo-item">-->
          <!--<div @click="deleteCurOtherPic()">-->
            <!--<pa-icon iconType="delete" iconClass="delete"></pa-icon>-->
          <!--</div>-->
          <!--<img src="./company.png" class="photo-img">-->
          <!--<div class="photograph"><pa-icon iconType="photograph"></pa-icon></div>-->
          <!--<div class="uploading-wrapper" v-show="1"><div class="content" :style="{width:upLoadingValue}"></div></div>-->
        <!--</div>-->
        <!--  生成的html如上  -->
        <div class="photo-item" v-for="(item,itemId) in otherItems" :key="itemId" @click="photographCard(3,itemId)">
          <div @click="deleteCurOtherPic(itemId)">
            <pa-icon iconType="delete" iconClass="delete"></pa-icon>
          </div>
          <img :src="item.picSrc" class="photo-img">
          <div class="photograph" v-show="item.isShowCamera"><pa-icon iconType="photograph"></pa-icon></div>
          <div class="uploading-wrapper" v-show="item.isShowUpLoading"><div class="content" :style="{width:upLoadingValue}"></div></div>
        </div>
        <div class="add-item" @click="photographCard(3)">
          <pa-icon iconType="add-photo" iconClass="icon"></pa-icon>
          <div class="text">其他材料</div>
        </div>
      </div>
    </div>
    <div class="page-buttons">
      <pa-button btn-size="max" btn-type="rectangle-full" @click.native="toNextPage">下一步</pa-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "./style.less";
</style>
<script>
  import PaButton from 'pa-ui/components/button';
  import PaIcon from 'pa-ui/components/icon';

  export default {
    props: {
      toPageRoute: String
    },
    data() {
      return{
        idCardFrontDatabase64:'', // 身份证正面
        idCardReverseDatabase64:'', // 身份证反面
        isShowUpLoadingFront: false, // 是否显示身份证正面上传upLoading
        isShowUpLoadingReverse: false, // 是否显示身份证反面上传upLoading
        isShowFrontCamera: true, // 是否显示 身份证正面 的相机
        isShowReverseCamera: true, // 是否显示 身份证反面 的相机
        upLoadingValue: '0%', // 上传身份证照片upLoading值
        otherItems: [], // 其他资料
        otherItemId: '', // 其他资料某张照片的Id -- 在重拍其他资料时用到
        frontJnlNo: '', // 首次为空，重新上传时传送后台返回的id，以便更新 -- 身份证正面
        reverseJnlNo: '', // 首次为空，重新上传时传送后台返回的id，以便更新 -- 身份证反面
        otherJnlNoList: [] // 首次为空，重新上传时传送后台返回的id，以便更新 -- 其他材料
      };
    },
    components:{
      PaButton,
      PaIcon
    },
    methods:{
      // 跳转到下一页
      toNextPage(){
        this.uploadImgs(); // 上传图片
      },
      // 拍照
      photographCard(flag, id){
        if(flag === 1) {
          Device.openCameraEx({
            callbackSucc: this.photographIdCardFrontSucc,
            imageType: '100',
            tophint: '请拍摄身份证人像面',
            bottomHint: '请将身份证人像面尽可能布满提示框'
          });
        }else if(flag === 2) {
          Device.openCameraEx({
            callbackSucc: this.photographIdCardReverseSucc,
            imageType: '101',
            tophint: '请拍摄身份证国徽面',
            bottomHint: '请将身份证国徽面尽可能布满提示框'
          });
        }else {
          this.otherItemId = id;
          Device.openCameraEx({
            callbackSucc: this.photographOtherSucc,
            imageType: '300',
            tophint: '请拍摄其他辅助资料',
            bottomHint: '请将资料尽可能布满提示框'
          });
        }
      },
      // 删除当前 其他资料的照片
      deleteCurOtherPic(itemId){
        this.otherItems.splice(itemId, 1);
      },
      // 拍照 身份证正面 成功回调
      photographIdCardFrontSucc() {
        let base64img = Device.getCameraImg();
        this.idCardFrontDatabase64 = `data:image/jpg;base64,${base64img}`;
        let params = {
          BusinessJnlNo   : Store.state.BusinessJnlNo,
          PicData         : base64img, //图片base64 字符串
          PicType         : '0001', // 看READER.md文档
          PicTypeName     : 'png', //图片类型名称
          JnlNo           : ''   //首次为空， 重新上传时传送后台返回的id，以便更新
        };
        let prdId = Store.state.PrdId;
        let url = `/mmarket/${prdId}.${Api.imageUpload}`;
        let _this = this;
        Ui.loading(true,'正在上传图片');
        this.isShowFrontCamera = false; // 隐藏相机图层
        this.isShowUpLoadingFront = true; // 显示上传图片loading进度条
        this.upLoadingValue = '0%'; // 初始上传进度为0
        Axios.post({
          url:url,
          params: params,
          onUploadProgress(e){ // 上传处理进度事件
              if (_this.upLoadingValue) _this.upLoadingValue = `${e.loaded / e.total * 100}%`;
          },
          success(res){
            _this.isShowUpLoadingFront = false; // 隐藏上传图片loading进度条
            _this.isShowFrontCamera = true; // 显示相机图层
            _this.frontJnlNo = res.JnlNo;
          },
          error(e){
            Ui.popBox(true, {text: e});
          }
        });
      },
      // 拍照 身份证反面 成功回调
      photographIdCardReverseSucc(){
        let base64img = Device.getCameraImg();
        this.idCardReverseDatabase64 = `data:image/jpg;base64,${base64img}`;
        let params = {
          BusinessJnlNo   : Store.state.BusinessJnlNo,
          PicData         : base64img, //图片base64 字符串
          PicType         : '0002', // 看READER.md文档
          PicTypeName     : 'png', //图片类型名称
          JnlNo           : ''   //首次为空， 重新上传时传送后台返回的id，以便更新
        };
        let prdId = Store.state.PrdId;
        let url = `/mmarket/${prdId}.${Api.imageUpload}`;
        let _this = this;
        Ui.loading(true,'正在上传图片');
        this.isShowReverseCamera = false; // 隐藏相机图层
        this.isShowUpLoadingReverse = true; // 显示上传图片upLoading进度条
        this.upLoadingValue = '0%'; // 初始上传进度为0
        Axios.post({
          url:url,
          params: params,
          onUploadProgress(e){ // 上传处理进度事件
              if (_this.upLoadingValue) _this.upLoadingValue = `${e.loaded / e.total * 100}%`;
          },
          success(res){
            _this.isShowUpLoadingReverse = false; // 隐藏上传图片upLoading进度条
            _this.isShowReverseCamera = true; // 显示相机图层
            _this.reverseJnlNo = res.JnlNo;
          },
          error(e){
            Ui.popBox(true, {text: e});
          }
        });
      },
      // 拍照 其他资料 成功回调
      photographOtherSucc() {
        let base64img = Device.getCameraImg();
        let isRePhotographFlag = 0; // 默认不是重拍其他资料
        let otherItemId = "";
        if(this.otherItemId) {
          isRePhotographFlag = 1; // 是重拍其他资料
          otherItemId = this.otherItemId;
          this.otherItemId = "";
        }
        if(isRePhotographFlag){ // 重拍的
          this.otherItems[otherItemId].picSrc = `data:image/jpg;base64,${base64img}`;
          this.otherItems[otherItemId].isShowUpLoading = true; // 显示上传图片upLoading进度条
          this.otherItems[otherItemId].isShowCamera = false; // 隐藏相机图层
        }else { // 在末尾加上去
          this.otherItems.push({
            picSrc: `data:image/jpg;base64,${base64img}`,
            isShowUpLoading: true, // 显示上传图片upLoading进度条
            isShowCamera: false
          });
        }
        let length = this.otherItems.length;
        let params = {
          BusinessJnlNo   : Store.state.BusinessJnlNo,
          PicData         : base64img, //图片base64 字符串
          PicType         : '1001', // 看READER.md文档
          PicTypeName     : 'png', //图片类型名称
          JnlNo           : ''   //首次为空， 重新上传时传送后台返回的id，以便更新
        };
        let prdId = Store.state.PrdId;
        let url = `/mmarket/${prdId}.${Api.imageUpload}`;
        let _this = this;
        Ui.loading(true,'正在上传图片');
        this.upLoadingValue = '0%'; // 初始上传进度为0
        Axios.post({
          url: url,
          params: params,
          onUploadProgress(e){ // 上传处理进度事件
              if (_this.upLoadingValue) _this.upLoadingValue = `${e.loaded / e.total * 100}%`;
          },
          success(res){
            if(isRePhotographFlag){ // 重拍的
              _this.otherItems[otherItemId].isShowUpLoading = false; // 隐藏上传图片upLoading进度条
              _this.otherItems[otherItemId].isShowCamera = true; // 显示相机图层
              _this.otherJnlNoList[otherItemId].JnlNo = res.JnlNo;
            }else {
              _this.otherItems[length-1].isShowUpLoading = false; // 隐藏上传图片upLoading进度条
              _this.otherItems[length-1].isShowCamera = true; // 显示相机图层
              _this.otherJnlNoList.push({
                JnlNo: res.JnlNo
              });
            }
          },
          error(e){
            Ui.popBox(true, {text: e});
          }
        });
      },
      // 点击"下一步" 上传图片
      uploadImgs() {
        let params = {
          BusinessJnlNo: Store.state.BusinessJnlNo,
          PicList:[
            {JnlNo: this.frontJnlNo},
            {JnlNo: this.reverseJnlNo}
          ]
        };
        for(let i of this.otherJnlNoList) {
          params.PicList.push(i);
        }
        let prdId = Store.state.PrdId;
        let url = `/mmarket/${prdId}.${Api.imageConfirmUpload}`;
        let _this = this;
        Ui.loading(true,'上传全部图片');
        Axios.post({
            url:url,
            params: params,
            success(){
                Core.toPage({name:_this.toPageRoute});
            },
            error(e){
              Ui.popBox(true, {text: e});
            }
        });
      }
    }
  };
</script>
