<template>
  <section>
    <pa-mask type="transparent" :disabled="disabled"></pa-mask>
    <section class="ui-pop-loading" :disabled="disabled">{{text}}</section>
  </section>
</template>
<script>
  import main from './main';
  export default main;
</script>
