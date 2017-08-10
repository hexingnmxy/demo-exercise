<template>
  <div class="input-wrap-verify">
    <input type="text"
       :class="['input-default', {'no-clear':!isShowClear}]"
       :placeholder="placeholder"
       :maxlength="maxlength"
       v-model="valueModel"
       @blur="blur"
       @focus="focus"
       :disabled="disabled"
    />
    <i class="input-clear" @click="clearInput" v-show="isShowClearIcon"/>
    <div class="input-error-tip" v-show="isShowErrorTip"><i class="icon-fail-verify input-error-icon"/>{{errorText}}</div>
  </div>
</template>
<script>
  import './style.less';
  import main from './main';
  export default main;
</script>
