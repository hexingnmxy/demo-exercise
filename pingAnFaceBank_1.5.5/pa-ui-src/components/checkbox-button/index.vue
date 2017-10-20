<template>
  <label class="checkbox-button-wrapper">
    <input type="checkbox"
       :value="paValue"
       :disabled="disabled"
       v-model="valueModel"
       class="checkbox-button"
    />
    <span class="checkbox-button-text"><slot></slot></span>
    <div class="checkbox-button-checked icon-selected-right-bottom"></div>
  </label>
</template>
<script>
  import './style'
  import main from './main';
  export default main;
</script>
