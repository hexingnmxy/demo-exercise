<template>
  <div>
      <h3 class="content-sample-head-title">{{title}}</h3>
      <p class="content-sample-head-tips">
          <slot></slot>
      </p>
  </div>
</template>
<script>
  import main from './main';
  import './style';
  export default main;
</script>
