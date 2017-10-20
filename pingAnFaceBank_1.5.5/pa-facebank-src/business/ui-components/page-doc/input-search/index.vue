<template>
<div class="input-search-wrapper">
  <pa-content-sample-header title="搜索框 InputSearch"></pa-content-sample-header>

  <pa-content-sample title="基础用法" tips="基础的Input-search用法">
    <div slot="source">
      <div class="input-search-item">
        <pa-input-search placeholderText='请输入搜索内容'
                         v-model="inputValueModel"
                         :click-search="clickSearch"></pa-input-search>
      </div>
    </div>
    <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-input-search</span><span style="color:#e8bf6a;"> placeholderText=</span><span style="color:#a5c261;font-weight:bold;">'</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">请输入搜索内容</span><span style="color:#a5c261;font-weight:bold;">' </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"inputValueModel" <br></span><span style="color:#e8bf6a;">  :pa-click-search=</span><span style="color:#a5c261;font-weight:bold;">"paClickSearch"</span>&gt;&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-input-search</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaInputSearch <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/input-search'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSampleHeader <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample-header'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">inputValueModel</span><span style="color:#cc7833;">: </span><span style="color:#a5c261;">''<br></span><span style="color:#a5c261;"> &nbsp; &nbsp; &nbsp;</span>};<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaInputSearch,<br>      PaContentSample,<br>      PaContentSampleHeader<br>    },<br>    <span style="color:#d0d0ff;">methods</span><span style="color:#cc7833;">: </span>{<br>      <span style="color:#bc9458;font-style:italic;">// </span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">点击搜索输入框</span><span style="color:#bc9458;font-style:italic;"> &nbsp;'</span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">放大镜</span><span style="color:#bc9458;font-style:italic;">'</span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">按钮<br></span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';"> &nbsp; &nbsp; &nbsp;</span><span style="color:#ffc66d;">paClickSearch</span>() {<br>        <span style="color:#bc9458;font-style:italic;">// </span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">查找</span><span style="color:#bc9458;font-style:italic;"> inputValueModel </span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">值的逻辑</span><span style="color:#bc9458;font-style:italic;">...<br></span><span style="color:#bc9458;font-style:italic;"> &nbsp; &nbsp; &nbsp;</span>}<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
  </pa-content-sample>

  <div>
    <h3 class="content-sample-table-title">Attributes</h3>
    <p class="content-sample-table-tips">参数详情数据列表显示</p>
    <div class="content-sample-table-wrapper">
      <div class="content-sample-top">
        <div class="content-sample-top-parameter">参数</div>
        <div class="content-sample-top-explain">说明</div>
        <div class="content-sample-top-type">类型</div>
        <div class="content-sample-top-alternative">可选值</div>
        <div class="content-sample-top-default">默认值</div>
      </div>
      <div class="content-sample-table">
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">placeholderText</div>
          <div class="content-sample-table-row-explain">输入框占位文本</div>
          <div class="content-sample-table-row-type">string</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">input-value</div>
          <div class="content-sample-table-row-explain">初始值</div>
          <div class="content-sample-table-row-type">string</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
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
