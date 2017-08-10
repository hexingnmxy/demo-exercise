<template>
  <div class="top-tab-wrapper">
    <div :class="['top-tab-item', {'active':item.active}]" v-for="item in tabItems" @click="click(item)"><span>{{item.title}}</span></div>
  </div>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
