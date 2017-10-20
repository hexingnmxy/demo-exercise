<template>
    <button class="sort-btn"
      :class="[status]"
    >
      <span class="sort-text-span"><slot></slot></span>
      <i class="sort-icon-btn"/>
    </button>
</template>
<script>
  import './style';
  import main from './main';
  export default main;
</script>
