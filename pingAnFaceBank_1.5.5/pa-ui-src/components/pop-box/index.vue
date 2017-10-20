<template>
  <section>
    <!-- 点击对话框外,对话框消失,写法如下 -->
    <!--<pa-mask :disabled="disabled" :type="maskType" @click.native="finish('MASK_CLOSE')"></pa-mask>-->
    <!-- 点击对话框外,对话框不消失,写法如下 -->
    <pa-mask :disabled="disabled" :type="maskType"></pa-mask>
    <transition name="ui-pop-transition">
      <section class="ui-pop-base pop-box" v-show="!disabled">
        <div class="pop-content-wrapper">
          <slot></slot>
        </div>
        <div class="pop-btn-list">
          <pa-button v-for="button in buttons" :key="button.id" @click.native="finish(button)"
                     btn-size="mid" btn-type="rectangle-full">{{button.text}}</pa-button>
        </div>
      </section>
    </transition>
  </section>
</template>
<script>
  import './style';
  import PaMask from '../mask/index';
  import PaButton from '../button/index';
  export default {
    data() {
      return {

      };
    },
    props: {
      buttons: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default() {
          return true;
        }
      },
      maskType: {
        type: String,
        default() {
          return 'transparent'; // black or transparent
        }
      },
      finish: {
        type: Function,
        default() {
          return () => {};
        }
      }
    },
    components: {
      PaMask,
      PaButton
    }
  };
</script>
