<template>
<div>
  <pa-content-sample-header title="遮罩 mask"></pa-content-sample-header>

  <pa-content-sample title="mask" tips="mask遮罩">
    <div slot="source">
      <pa-button @click.native="openMask" btn-size="max" btn-type="rectangle-full">打开mask 3 秒关闭</pa-button>
      <pa-button @click.native="openTransparent" btn-size="max" btn-type="rectangle-full">打开透明mask 3 秒关闭</pa-button>
    </div>
    <div slot="code">
      <pre style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;">&lt;<span style="color: rgb(232, 191, 106);">template</span>&gt;<br>&lt;<span style="color: rgb(232, 191, 106);">div</span>&gt;<br>  &lt;<span style="color: rgb(232, 191, 106); background-color: rgb(60, 60, 87);">pa-loading</span><span style="color: rgb(232, 191, 106);"> text=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"</span><span style="color: rgb(165, 194, 97); font-weight: bold; font-family: 宋体-18030;">加载中</span><span style="color: rgb(165, 194, 97); font-weight: bold;"> 3</span><span style="color: rgb(165, 194, 97); font-weight: bold; font-family: 宋体-18030;">秒后关闭</span><span style="color: rgb(165, 194, 97); font-weight: bold;">" </span><span style="color: rgb(232, 191, 106);">:disabled=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"true"</span>&gt;&lt;/<span style="color: rgb(232, 191, 106); background-color: rgb(60, 60, 87);">pa-loading</span>&gt;<br>&lt;/<span style="color: rgb(232, 191, 106);">div</span>&gt;<br>&lt;/<span style="color: rgb(232, 191, 106);">template</span>&gt;<br></span></pre>
    </div>
  </pa-content-sample>

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
          <div class="content-sample-table-row-parameter">disabled</div>
          <div class="content-sample-table-row-explain">是否禁用</div>
          <div class="content-sample-table-row-type">Boolean</div>
          <div class="content-sample-table-row-alternative" style="width: 13.2rem">true,false</div>
          <div class="content-sample-table-row-default">true</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">type</div>
          <div class="content-sample-table-row-explain">mask类型</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative" style="width: 13.2rem">black,transparent</div>
          <div class="content-sample-table-row-default">black</div>
        </div>
      </div>
    </div>
  </div>

  <pa-mask :type="maskType"  :disabled="disabled"></pa-mask>
</div>
</template>
<script>
    import './style.less';
    import main from './main';
    export default main;
</script>
