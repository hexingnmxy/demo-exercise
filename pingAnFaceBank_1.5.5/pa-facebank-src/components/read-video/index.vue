<template>

  <pa-layout-auto-content>
    <pa-return slot="header"
               :linkAddress="linkPrevious"
               navigationTitle="视频认证"
              >
    </pa-return>
    <div class="ui-page-box">

      <div class="video-top" v-if="btnState == 'btnStateStart'|| btnState =='btnStateQueue'">
        <div class="icon-customer video-customer"></div>
        <div class="video-line-box">
          <div class="video-line" :class="{'video-connecting': videoConnecting}">
            <div class="video-line video-line-active"></div>
            <span class="video-move-line-item"></span>
          </div>
          <span class="video-message" v-html="messagePoint">{{messagePoint}}</span>
        </div>
        <div class="icon-server video-server"></div>
      </div>

      <div class="video-top" v-if="btnState == 'btnStateReset'">
        <div class="video-customer" :class="isNetworkUnusual?'icon-network-unusual':'icon-cancel-queue'"></div>
        <div class="video-tips-box">
          <pa-title-group :title-text="videoTipsTitle" tips-text="请检查您的网络连接是否正常"></pa-title-group>
        </div>
        <div class="video-server"></div>
      </div>

      <div class="video-tips">
        <div>
          <div class="video-tips-margin">
            <span class="icon-invisibility video-tips-icon"></span>
            请勿遮挡面部
          </div>
          <div class="video-tips-margin">
            <span class="icon-light video-tips-icon"></span>
            移动至光线充足的位置
          </div>
          <div class="video-tips-margin">
            <span class="icon-all-day-service video-tips-icon"></span>
            平安银行远程柜面为您提供7*24小时服务
          </div>
        </div>
      </div>
      <pa-bottom-button
        position-type="fixed"
        :btn-list="paBtnList"
        :item-click="itemClick"
      ></pa-bottom-button>

    </div>
  </pa-layout-auto-content>

</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
