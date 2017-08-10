<template>
  <label class="checkbox-wrapper">
    <input type="checkbox"
       :value="paValue"
       :disabled="disabled"
       v-model="valueModel"
       class="checkbox"
    /><span class="checkbox-text"><slot>{{paText}}</slot></span>
  </label>
</template>
<script>
  import './style'
  import main from './main';
  export default main;
</script>
