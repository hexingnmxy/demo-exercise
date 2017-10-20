<template>
  <div class="title-text" :class="[size,color]">
    <slot></slot>
  </div>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
