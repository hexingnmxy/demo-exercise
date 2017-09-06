<template>
  <div id="app">
    <section class="app-content">
      <!-- <keep-alive> -->
        <router-view name="default" ></router-view>
      <!-- </keep-alive> -->
      <bottom-nav></bottom-nav>
    </section>
    <!--其他店内页集合 有过渡效果-->
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view name="subPage" class="sub-page"></router-view>
    </transition>

  </div>
</template>

<script>
  import bottomNav from 'src/basecompoent/bottomNav/bottomNav.vue'
  export default {
    name: 'app',
    data:function(){
      return {
        'enterAnimate':'',
        'leaveAnimate':''
      }
    },
    components: {
      bottomNav
    }
  }
</script>

<style lang='less' rel="stylesheet/less">
  @import 'assets/css/base.less';
  @import 'assets/lib/animate/animate.css';
  #app{
    font-size:1.2rem;
    background-color: @background-color;
    >*{
      color:@font-color;
      font-size:1rem;
    }
  }
</style>
