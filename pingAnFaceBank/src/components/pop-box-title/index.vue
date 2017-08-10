<template>
  <pa-pop-box :buttons="buttons" :disabled="isPopDisabled" :finish="finish">
    <pa-pop-header :pop-title="popTitle" :pop-box-close-fun="close" :show-icon=true></pa-pop-header>
    <div class="pop-box-title-content">
      <slot></slot>
    </div>
  </pa-pop-box>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
