<template>
  <section :class="['ui-mask', {'ui-mask-none':disabled}]"
           :style="{'backgroundColor':bg}"></section>
</template>
<script>
  import main from './main';
  export default main;
</script>
