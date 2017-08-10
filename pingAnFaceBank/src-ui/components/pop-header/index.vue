<template>
    <div class="pop-header-container" >
      <span><h4>{{popTitle}}</h4></span>
      <span class="pop-header-close"  :style="{'visibility':showIcon?'visible':'hidden'}" @click="popBoxCloseFun"></span>
    </div>
</template>
<script>
  import './style.less';
  import main from './main';
  export default main;
</script>
