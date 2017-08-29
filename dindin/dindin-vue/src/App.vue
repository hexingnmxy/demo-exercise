<template>
  <div id="app">
  <i class="fa fa-trash-o fa-lg"></i>
  <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  
  }
}
</script>

<style lang='less' rel="stylesheet/less">
  @import 'assets/css/base.less';
  #app{
    background-color: @background-color;
    >*{
      color:@font-color;
      font-size:1rem;
    }
  }
</style>
