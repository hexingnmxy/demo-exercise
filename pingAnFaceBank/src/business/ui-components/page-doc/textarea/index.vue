<template>
  <div>
    <pa-content-sample-header title="文本域 Textarea"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="多行输入框">
      <pa-textarea
        slot="source"
        :max=20
        :show-counter=true
        :rows="textareaRows"
        v-model="inputValueModel"
        placeholder="请输入内容..."
      ></pa-textarea>
      <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;">pa-textarea :max=</span><span style="color:#a5c261;font-weight:bold;">20 </span><span style="color:#e8bf6a;">:show-counter=</span><span style="color:#a5c261;font-weight:bold;">true </span><span style="color:#e8bf6a;">:rows=</span><span style="color:#a5c261;font-weight:bold;">"textareaRows" </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"inputValueModel"<br></span><span style="color:#a5c261;font-weight:bold;"> &nbsp;</span><span style="color:#e8bf6a;">placeholder=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">请输入内容</span><span style="color:#a5c261;font-weight:bold;">..."<br></span>&gt;&lt;/<span style="color:#e8bf6a;">pa-textarea</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaTextarea <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/textarea'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSampleHeader <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample-header'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">textareaRows</span><span style="color:#cc7833;">:</span><span style="color:#a5c261;">5</span>,<br>        <span style="color:#d0d0ff;">inputValueModel</span><span style="color:#cc7833;">:</span><span style="color:#a5c261;">'text-area'<br></span><span style="color:#a5c261;"> &nbsp; &nbsp; &nbsp;</span>};<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">:</span>{<br>      PaTextarea,<br>      PaContentSample,<br>      PaContentSampleHeader<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
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
            <div class="content-sample-table-row-parameter">placeholder</div>
            <div class="content-sample-table-row-explain">输入框占位文本</div>
            <div class="content-sample-table-row-type">string</div>
            <div class="content-sample-table-row-alternative">——</div>
            <div class="content-sample-table-row-default">——</div>
          </div>
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">show-counter</div>
            <div class="content-sample-table-row-explain">是否显示计数器</div>
            <div class="content-sample-table-row-type">Boolean</div>
            <div class="content-sample-table-row-alternative">true,false</div>
            <div class="content-sample-table-row-default">true</div>
          </div>
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">rows</div>
            <div class="content-sample-table-row-explain">输入框行数</div>
            <div class="content-sample-table-row-type">Number</div>
            <div class="content-sample-table-row-alternative">——</div>
            <div class="content-sample-table-row-default">5</div>
          </div>
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">max</div>
            <div class="content-sample-table-row-explain">最多输入多少字符</div>
            <div class="content-sample-table-row-type">Number</div>
            <div class="content-sample-table-row-alternative">——</div>
            <div class="content-sample-table-row-default">——</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import main from './main';
    export default main;
</script>
