<template>
  <section>
    <pa-mask :disabled="disabled" :type="maskType" @click.native="finish('MASK_CLOSE')"></pa-mask>
    <transition name="ui-pop-transition">
      <section class="ui-pop-base pop-box" v-show="!disabled">
        <div class="pop-content-wrapper">
          <slot></slot>
        </div>
        <div class="pop-btn-list">
          <pa-button v-for="button in buttons" :key="button.id" @click.native="finish(button.id)"
                     btn-size="mid" btn-type="rectangle-full">{{button.text}}</pa-button>
        </div>
      </section>
    </transition>
  </section>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
