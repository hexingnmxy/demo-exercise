<template>
  <div>
    <pa-slider-toggle v-model="sliderToggleShow">

      <div class="navigator-wrapper">
        <div class="navigator-header">
          <span class="icon-direction-right-single navigator-return-icon" @click="onBreak"></span>
          <span class="navigator-user">
                <span class="icon-user navigator-user-icon"></span>
                <span class="navigator-username">{{userName}}</span>
              </span>
        </div>

        <div class="navigator-title">
          <pa-title text-color="black">{{navigatorTitle}}</pa-title>
        </div>

        <div class="navigator-content">
          <pa-step-line :stepList="stepList"></pa-step-line>
        </div>

        <div class="navigator-footer">
              <span>
                <span class="icon-home navigator-home-icon"></span>
                <span>返回首页</span>
              </span>

          <span>
                  <span class="icon-bluetooth navigator-bluetooth-icon"></span>
                  <span>蓝牙设置</span>
                </span>
        </div>
      </div>

    </pa-slider-toggle>
  </div>
</template>
<script>
  import main from './main';
  import './style';
  export default main;
</script>
