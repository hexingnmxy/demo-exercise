<template>
<div>
    <pa-content-sample-header title="单选框 Radio"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="基础的radio用法">
        <div slot="source">
          <div class="radio-container">
            <pa-radio v-model="foodModel" pa-value="apple">苹果</pa-radio>
            <pa-radio v-model="foodModel" pa-value="pear">梨子</pa-radio>
          </div>
        </div>
      <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-radio</span><span style="color:#e8bf6a;"> v-model=</span><span style="color:#a5c261;font-weight:bold;">"foodModel" </span><span style="color:#e8bf6a;">pa-value=</span><span style="color:#a5c261;font-weight:bold;">"apple" </span><span style="color:#e8bf6a;">pa-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">苹果</span><span style="color:#a5c261;font-weight:bold;">"</span>&gt;&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-radio</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-radio v-model=</span><span style="color:#a5c261;font-weight:bold;">"foodModel" </span><span style="color:#e8bf6a;">pa-value=</span><span style="color:#a5c261;font-weight:bold;">"pear" </span><span style="color:#e8bf6a;">pa-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">梨子</span><span style="color:#a5c261;font-weight:bold;">"</span>&gt;&lt;/<span style="color:#e8bf6a;">pa-radio</span>&gt;<br><br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaRadio <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/radio'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">foodModel</span><span style="color:#cc7833;">: </span><span style="color:#a5c261;">'apple'<br></span><span style="color:#a5c261;"> &nbsp; &nbsp; &nbsp;</span>};<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaRadio<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
    </pa-content-sample>

    <!--<pa-content-sample title="禁用状态" tips="单选框不可用状态">-->
        <!--<div slot="source">-->
          <!--<pa-radio v-model="toolModel" pa-value="bike" :disabled=true>自行车</pa-radio>-->
          <!--&lt;!&ndash;<pa-radio v-model="toolModel" pa-value="bus" :disabled=true>公交车</pa-radio>&ndash;&gt;-->
        <!--</div>-->
      <!--<pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;">pa-radio v-model=</span><span style="color:#a5c261;font-weight:bold;">"toolModel" </span><span style="color:#e8bf6a;">pa-value=</span><span style="color:#a5c261;font-weight:bold;">"bike" </span><span style="color:#e8bf6a;">pa-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">自行车</span><span style="color:#a5c261;font-weight:bold;">" </span><span style="color:#e8bf6a;">:disabled=</span><span style="color:#a5c261;font-weight:bold;">true</span>&gt;&lt;/<span style="color:#e8bf6a;">pa-radio</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-radio v-model=</span><span style="color:#a5c261;font-weight:bold;">"toolModel" </span><span style="color:#e8bf6a;">pa-value=</span><span style="color:#a5c261;font-weight:bold;">"bus" </span><span style="color:#e8bf6a;">pa-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">公交车</span><span style="color:#a5c261;font-weight:bold;">" </span><span style="color:#e8bf6a;">:disabled=</span><span style="color:#a5c261;font-weight:bold;">true</span>&gt;&lt;/<span style="color:#e8bf6a;">pa-radio</span>&gt;<br><br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaRadio <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/radio'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">toolModel</span><span style="color:#cc7833;">: </span><span style="color:#a5c261;">'bus'<br></span><span style="color:#a5c261;"> &nbsp; &nbsp; &nbsp;</span>};<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaRadio<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>-->
    <!--</pa-content-sample>-->

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
          <div class="content-sample-table-row-parameter">pa-value</div>
          <div class="content-sample-table-row-explain">选项值</div>
          <div class="content-sample-table-row-type">string</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">disabled</div>
          <div class="content-sample-table-row-explain">原生disabled属性</div>
          <div class="content-sample-table-row-type">Boolean</div>
          <div class="content-sample-table-row-alternative">true,false</div>
          <div class="content-sample-table-row-default">false</div>
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
