<template>
  <div class='input-search-wrap'>
    <input type="text" class="order-search-input"
     :placeholder = 'placeholderText'
       v-model = "valueModel"
    />
    <i class="order-search-i"
       @click="paClickSearch"/>
  </div>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
