<template>
  <div>
    <content-sample-header title="字体 Font"></content-sample-header>

    <!--<div class="components-font-size"-->
         <!--:style="{'font-size':item.size,'font-weight':item.weight}"-->
         <!--v-for="(item,index) in fontList">-->
      <!--<span class="components-font-item-title">{{item.size}}</span>-->
      <!--<span>{{item.text}}</span>-->
    <!--</div>-->
    <div class="font-content">
      <div class="font-line">
        <div class="font-bold-30">演示文字</div>
        <div class="font-style-explain">微软雅黑30px<span class="font-style-explain-weight">加粗</span></div>
        <div class="font-usage-explain">内容重点修饰文字</div>
      </div>
      <div class="font-line">
        <div class="font-bold-26">演示文字</div>
        <div class="font-style-explain">微软雅黑26px<span class="font-style-explain-weight">加粗</span></div>
        <div class="font-usage-explain">状态栏文字</div>
      </div>
      <div class="font-line">
        <div class="font-bold-24">演示文字</div>
        <div class="font-style-explain">微软雅黑24px<span class="font-style-explain-weight">加粗</span></div>
        <div class="font-usage-explain">弹窗标题文字</div>
      </div>
      <div class="font-line">
        <div class="font-bold-22">演示文字</div>
        <div class="font-style-explain">微软雅黑22px<span class="font-style-explain-weight">加粗</span></div>
        <div class="font-usage-explain">一级菜单文字</div>
      </div>
      <div class="font-line">
        <div class="font-bold-20">演示文字</div>
        <div class="font-style-explain">微软雅黑20px<span class="font-style-explain-weight">加粗</span></div>
        <div class="font-usage-explain">内容区标题提示文字</div>
      </div>
      <div class="font-line">
        <div class="font-20">演示文字</div>
        <div class="font-style-explain">微软雅黑20px</div>
        <div class="font-usage-explain">二级菜单文字及input文字</div>
      </div>
      <div class="font-line">
        <div class="font-18">演示文字</div>
        <div class="font-style-explain">微软雅黑18px</div>
        <div class="font-usage-explain">文本域文字</div>
      </div>
      <div class="font-line">
        <div class="font-16">演示文字</div>
        <div class="font-style-explain">微软雅黑16px</div>
        <div class="font-usage-explain">警示提示文字及次要信息文字</div>
      </div>
    </div>
  </div>

</template>

<script>
  import './style.less';
  import main from './main';
  export default main;
</script>
