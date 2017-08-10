<template>
<div>
  <pa-content-sample-header title="加载框 Loading"></pa-content-sample-header>

  <pa-content-sample title="Loading box" tips="loading 加载框">
    <div slot="source">
      <pa-button @click.native="openLoading" btn-size="max" btn-type="rectangle-full">打开loading</pa-button>
    </div>
    <div slot="code">
      <pre style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;">&lt;<span style="color: rgb(232, 191, 106);">template</span>&gt;<br>&lt;<span style="color: rgb(232, 191, 106);">div</span>&gt;<br>  &lt;<span style="color: rgb(232, 191, 106); background-color: rgb(60, 60, 87);">pa-loading</span><span style="color: rgb(232, 191, 106);"> text=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"</span><span style="color: rgb(165, 194, 97); font-weight: bold; font-family: 宋体-18030;">加载中</span><span style="color: rgb(165, 194, 97); font-weight: bold;"> 3</span><span style="color: rgb(165, 194, 97); font-weight: bold; font-family: 宋体-18030;">秒后关闭</span><span style="color: rgb(165, 194, 97); font-weight: bold;">" </span><span style="color: rgb(232, 191, 106);">:disabled=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"true"</span>&gt;&lt;/<span style="color: rgb(232, 191, 106); background-color: rgb(60, 60, 87);">pa-loading</span>&gt;<br>&lt;/<span style="color: rgb(232, 191, 106);">div</span>&gt;<br>&lt;/<span style="color: rgb(232, 191, 106);">template</span>&gt;<br></span></pre>
    </div>
  </pa-content-sample>

  <pa-loading text="加载中 3秒后关闭" :disabled="disabled"></pa-loading>
</div>
</template>
<script>
  import './style.less';
  import main from './main';
  export default main;
</script>
