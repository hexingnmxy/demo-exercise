<template>
  <label class="radio-button-wrapper">
    <input type="radio" class="radio-button-base"
    v-model="valueModel"
    :disabled="disabled"
    :value="paValue"
    />
    <span class="radio-button-text"><slot></slot></span>
    <div class="radio-button-checked icon-selected-right-bottom"></div>
  </label>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
