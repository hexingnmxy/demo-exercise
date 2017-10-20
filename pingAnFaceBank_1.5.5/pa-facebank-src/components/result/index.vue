<template>
  <div class="page">
    <div class="page-container-row">
      <div class="left">
        <div :class="['top',resultStatus]">
          <pa-icon :iconType="iconType" iconClass="icon"></pa-icon>
          <div>{{statusText}}</div>
        </div>
        <div class="text"><slot></slot></div>
        <div class="button">
          <pa-button btn-size="max" btn-type="rectangle-full" @click.native="toNextPage">完成</pa-button>
        </div>
      </div>
      <div class="right">
        <div class="up">
          <pa-carousel :items="imgArray"></pa-carousel>
        </div>
        <div class="center"></div>
        <div class="down">
          <div class="up-qr-code"></div>
          <div class="up-text">平安银行微信公众号</div>
          <div class="down-qr-code"></div>
          <div class="down-text">平安口袋银行</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "./style.less";
</style>
<script>
  import PaButton from 'pa-ui/components/button';
  import PaIcon from 'pa-ui/components/icon';
  import PaCarousel from '../../../pa-ui-src/components/carousel-new';

  export default {
    mounted() {
      this.getAdImgs(); // 获取广告图片
    },
    data() {
      return{
        imgArray: []
      }
    },
    props: {
      // 结果状态 success、fail
      resultStatus: {
        type: String,
        default() {
          return 'success';
        }
      }
    },
    computed: {
      iconType() {
        return `result-${this.resultStatus}`;
      },
      statusText() {
        return this.resultStatus === 'success'?"交易成功":"交易失败";
      }
    },
    components: {
      PaButton,
      PaIcon,
      PaCarousel
    },
    methods:{
      // 获取广告图片
      getAdImgs(){
        let prdId = Store.state.PrdId;
        let url = `/mmarket/${prdId}.${Api.getAdsInfo}`;
        let _this = this;
        Axios.post({
            url:url,
            params:{PrdId: prdId},
            success(res){
                _this.imgArray = res.List;
            },
            error(e){
                Ui.popBox(true, {text: e});
            }
        });
      }
    }
  };
</script>
