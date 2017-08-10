<template>
  <label class="radio-wrapper">
    <input type="radio" class="radio-base"
       :value="paValue"
       v-model="valueModel"
       :disabled="disabled"
    />
    <span class="radio-text"><slot></slot></span>
  </label>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
