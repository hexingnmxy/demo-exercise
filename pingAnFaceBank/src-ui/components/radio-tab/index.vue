<template>
  <label>
    <div class="radio-tab-wrapper">
      <div :class="['radio-item', {'checked':item.value===valueModel}]" v-for="item in items" @click="clickItem(item)">{{item.text}}</div>
    </div>
  </label>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
