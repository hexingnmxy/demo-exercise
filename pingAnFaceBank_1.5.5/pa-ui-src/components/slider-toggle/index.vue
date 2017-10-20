<template>


    <transition name="slider-toggle">
      <div class="component-slider-toggle" v-if="disabled">
        <slot></slot>
      </div>
    </transition>

</template>
<script>
  import main from './main';
  import './style';
  export default main;
</script>
