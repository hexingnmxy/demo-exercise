<template>
  <div>
      <h3 class="content-sample-title">{{title}}</h3>
      <p class="content-sample-tips">{{tips}}</p>
      <div class="content-sample-text" :class="{'hover': hover}" @mouseenter="contentSampleGetHover" @mouseleave="contentSampleLoseHover">
          <div class="content-sample-source">
              <slot name="source"></slot>
          </div>
          <div class="content-sample-code-contain" :style="{height: styleHeight + 'px'}">
              <div class="content-sample-code">
                  <slot name="code"></slot>
              </div>
          </div>
          <div class="content-sample-fold-control" :class="{'icon-active': iconActive}" @mouseenter="contentSampleGetIconActive" @mouseleave="contentSampleLoseIconActive" @click="onIconActive">
              <pa-icon :iconType="iconType"></pa-icon>
              <span class="content-sample-fold-control-text">{{foldControlText}}</span>
          </div>
      </div>
  </div>
</template>
<script>
  import main from './main';
  import './style';
  export default main;
</script>
