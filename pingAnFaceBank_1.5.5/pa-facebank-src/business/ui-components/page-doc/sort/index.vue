<template>
<div class="sort-wrapper">
  <pa-content-sample-header title="排序 Sort"></pa-content-sample-header>

  <pa-content-sample title="基础用法" tips="基础的排序用法">
    <div slot="source">
      <pa-sort sort-status='none'>不带排序</pa-sort>
      <pa-sort>未点击状态</pa-sort>
      <pa-sort sort-status='up'>升序排列</pa-sort>
      <pa-sort sort-status='down'>降序排列</pa-sort>
    </div>
    <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-sort</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">默认排序</span>&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-sort</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-sort sort-status=</span><span style="color:#a5c261;font-weight:bold;">'up'</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">升序排列</span>&lt;/<span style="color:#e8bf6a;">pa-sort</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-sort sort-status=</span><span style="color:#a5c261;font-weight:bold;">'down'</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">降序排列</span>&lt;/<span style="color:#e8bf6a;">pa-sort</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaSort <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/sort'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample/index.vue'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaSort,<br>      PaContentSample<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
  </pa-content-sample>

  <!--<pa-content-sample title="不同尺寸" tips="排序组件提供了三种尺寸">-->
    <!--<div slot="source">-->
      <!--<pa-sort sort-status='up' sort-size='long'>长按钮</pa-sort>-->
      <!--<pa-sort sort-status='up'>正常</pa-sort>-->
      <!--<pa-sort sort-status='up' sort-size='min'>短按钮</pa-sort>-->
    <!--</div>-->
    <!--<pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-sort</span><span style="color:#e8bf6a;"> sort-size=</span><span style="color:#a5c261;font-weight:bold;">'long'</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">长按钮</span>&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-sort</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-sort </span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">正常</span>&lt;/<span style="color:#e8bf6a;">pa-sort</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-sort sort-size=</span><span style="color:#a5c261;font-weight:bold;">'short'</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">短按钮</span>&lt;/<span style="color:#e8bf6a;">pa-sort</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaSort <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/sort'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample/index.vue'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaSort,<br>      PaContentSample<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>-->
  <!--</pa-content-sample>-->

  <div>
    <h3 class="content-sample-table-title">Attributes</h3>
    <p class="content-sample-table-tips">参数详情数据列表显示</p>
    <div class="content-sample-table-wrapper">
      <div class="content-sample-top">
        <div class="content-sample-top-parameter">参数</div>
        <div class="content-sample-top-explain">说明</div>
        <div class="content-sample-top-type">类型</div>
        <div class="content-sample-top-alternative" style="width: 13.2rem">可选值</div>
        <div class="content-sample-top-default">默认值</div>
      </div>
      <div class="content-sample-table">
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">sort-status</div>
          <div class="content-sample-table-row-explain">按钮状态</div>
          <div class="content-sample-table-row-type">string</div>
          <div class="content-sample-table-row-alternative" style="width: 13.2rem">up(升序),down(降序),none</div>
          <div class="content-sample-table-row-default">none</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import './style.less';
  import main from './main';
  export default main;
</script>
