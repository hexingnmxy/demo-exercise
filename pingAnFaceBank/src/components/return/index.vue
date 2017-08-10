<template>
    <div class="return-wrapper">
      <span class="return-link" @click="returnClick(linkAddress)">
        <span :class="[linkAddress?'icon-direction-left-single':'icon-home', 'return-icon']">
        </span>
        <span class="return-text">{{topText}}</span>
      </span>
      <span class="return-navigation-title">
        {{navigationTitle}}
      </span>
      <span class="icon-direction-left-double return-navigation-icon" @click="navigationIconClick"></span>
    </div>
</template>
<script>
  import main from './main';
  import './style';
  export default main;
</script>
