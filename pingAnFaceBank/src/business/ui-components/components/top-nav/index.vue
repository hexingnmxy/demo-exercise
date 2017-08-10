<template>
  <div class="top-nav-box">
    <div class="top-nav">
      <div class="top-nav-position">
        <!--<div class="top-nav-left">PINGAN-UI</div>-->
        <div class="top-nav-right">
          <!--<PaTopNavFont-->
            <!--v-for="(navItem, index) in navList"-->
            <!--:active="navItem.active?(active=index,true):false"-->
            <!--@click.native="changeStatusFun(index)"-->
          <!--&gt;-->
            <!--{{navItem.text}}-->
          <!--</PaTopNavFont>-->
          <div v-for="(navItem, index) in navList" @click="changeStatusFun(index)"
               :class="['top-nav-right-item',{'top-nav-right-item-active':navItem.active}]"
          >{{navItem.text}}</div>
        </div>
      </div>
    </div>
    <div class="top-title">
      <div class="top-title-content">
        <div class="top-title-icon"></div>
        <div class="top-title-text">FaceBank标准化组件库</div>
      </div>
    </div>
  </div>
</template>
<script>
    import './style';
    import main from './main';
    export default main;
</script>
