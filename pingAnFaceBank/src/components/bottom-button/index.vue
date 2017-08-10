<template>
  <pa-button :class="bottomBtnListCss" btn-size="max" btn-type="rectangle-full">
      <div v-for="(item,index) in btnArray" class="bottom-btn-item"
                  :disabled=item.disabled
                 @click="itemClick(item,index)">{{item.text}}</div>
  </pa-button>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
