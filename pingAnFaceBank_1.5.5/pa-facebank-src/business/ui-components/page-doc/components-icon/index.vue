<template>
  <div>
    <content-sample-header title="图标 Icon"></content-sample-header>

    <div class="components-icon-box">

      <div class="components-icon-wrapper" v-for="(item,index) in iconList">
        <pa-icon :icon-type="item.iconClass"></pa-icon>
        <p>.icon-{{item.iconClass}}</p>
      </div>
    </div>

  </div>

</template>

<script>
  import './style.less';
  import main from './main';
  export default main;
</script>
