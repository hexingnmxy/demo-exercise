<template>
  <layout-auto-content>
    <div slot="header">
      <pa-return :linkAddress="linkAddress" navigation-title="完成"></pa-return>
    </div>
    <div class="ui-page-box-horizontal" @click="stopCount">
      <div class="page-result-left">
        <div class="page-result-main">
          <div :class="iconCss" class="page-result-main-icon"></div>
          <div class="page-result-main-text">{{status}}</div>
          <div class="page-result-main-content-wrap">
            <slot></slot>
          </div>
          <div class="page-result-btn">
            <pa-button btn-type="rectangle-full" btn-size="max" @click.native="finish">完成{{countStr}}</pa-button>
          </div>
        </div>
      </div>
      <div class="page-result-right">
        <div class="page-result-QRCode-wrap">
          <div class="page-result-QRCode" :style="{'background-image': QRCodeImage}"></div>
          <div class="page-result-QRCode-text">
            扫描二维码关注“平安好邻居”，将预约信息记录到微信
          </div>
        </div>
        <div class="page-result-card-wrap">
          <div class="page-result-card">
            <!--<pa-carousel ref="carousel">-->
              <!--<pa-carousel-item :active="true">-->
                <!--轮播1-->
              <!--</pa-carousel-item>-->
              <!--<pa-carousel-item>-->
                <!--&lt;!&ndash;<pa-image-show background-color="gray"&ndash;&gt;-->
                               <!--&lt;!&ndash;:background-image="backgroundImage">&ndash;&gt;-->
                <!--&lt;!&ndash;</pa-image-show>&ndash;&gt;-->
                <!--轮播2-->
              <!--</pa-carousel-item>-->
              <!--<pa-carousel-item>-->
                <!--轮播3-->
              <!--</pa-carousel-item>-->
              <!--<pa-carousel-item>-->
                <!--轮播4-->
              <!--</pa-carousel-item>-->
              <!--<pa-carousel-item>-->
                <!--轮播5-->
              <!--</pa-carousel-item>-->
            <!--</pa-carousel>-->
          </div>
        </div>
      </div>
    </div>
  </layout-auto-content>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
