<template>
  <layout-auto-content>
    <div slot="header">
      <pa-return :linkAddress="linkAddress"></pa-return>
    </div>
    <div class="swipe-card-content">
      <div class="swipe-card-bg">
        <pa-image-show class="swipe-image" :background-image="backgroundImage" ></pa-image-show>
        <div class="swipe-card-tips" v-if="bankText">
          将您的<span class="swipe-card-highlight-tips">银行卡</span>放置在阅读仪上
        </div>
        <div class="swipe-card-tips" v-else>
          将您的<span class="swipe-card-highlight-tips">身份证</span>放置在二代身份证阅读仪上
        </div>
      </div>
    </div>
    <pa-bottom-button :btn-list="btnList" position-type="fixed" :item-click="itemClick"></pa-bottom-button>

    <pa-pop-box-title :buttons="buttons"
                      :is-pop-disabled="disabled"
                      :close-or-confirm="swipeCardCallback"
                      pop-title="证件信息"
    >
      <div class="swipe-card-pop-content">
        <div class="swipe-card-pop-name">姓名：{{idCardName}}</div>
        <div class="swipe-card-pop-type">证件类型：身份证</div>
        <div class="swipe-card-pop-id">身份证号：{{idCardNo}}</div>
        <div class="swipe-card-pop-photo" :style="{'backgroundImage': idCardPhoto}"></div>
      </div>
    </pa-pop-box-title>
  </layout-auto-content>
</template>
<script>
    import './style';
    import main from './main';
    export default main;
</script>
