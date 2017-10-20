<template>
    <div>
        <!-- 公共部分 -->
      <div class="app-img"></div>
      <div class="icon">个人开卡</div>
      <router-link to="/">首页</router-link>
      <router-link to="page1">跳转page1</router-link>
      <router-link to="page2">跳转page2</router-link>
      <router-view></router-view>
    </div>
</template>
<script>
    import './App.less';
    export default {
    }
</script>
