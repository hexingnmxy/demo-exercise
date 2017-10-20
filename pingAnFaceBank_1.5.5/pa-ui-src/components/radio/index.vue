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
<style lang="less" scoped>
  @import './style.less';
</style>
<script>
  export default {
    data() {
      return {
        valueModel: this.value
      };
    },
    props: {
      // 父组件 v-model传过来的值
      value: {
        type: String,
        default() {
          return '0';
        }
      },
      // 是否可变
      disabled: {
        type: Boolean,
        default() {
          return false;
        }
      },
      paValue: {
        type: String,
        default() {
          return '';
        }
      }
    },
    watch: {
      valueModel(newValue) {
        // 子组件值发生改变 通知父组件值改变
        this.$emit('input', newValue);
      },
      value() {
        // 父组件值发生改变 通知子组件值改变
        this.valueModel = this.value;
      }
    }
  };

</script>
