<template>
  <section class="layout-auto-content-box">
    <header class="layout-auto-content-header">
      <slot name="header"></slot>
    </header>
    <section class="layout-auto-content">
      <div class="layout-auto-content-body">
        <slot></slot>
      </div>
    </section>
    <footer class="layout-auto-content-footer">
      <slot name="footer"></slot>
    </footer>
  </section>
</template>
<script>
  import main from './main';
  import './style.less';
  export default main;
</script>
