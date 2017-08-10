<template>
  <label class="select-item-box">
    <div class="select-item-content">
      <slot></slot>
    </div>
    <pa-radio v-if="isRadioBox" v-model="toolModel" :pa-value="radioValue"></pa-radio>
    <pa-checkbox v-else></pa-checkbox>
  </label>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
