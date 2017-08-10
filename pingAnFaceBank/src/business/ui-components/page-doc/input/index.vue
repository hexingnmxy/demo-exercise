<template>
<div>
  <pa-content-sample-header title="输入框 Input"></pa-content-sample-header>

  <pa-content-sample title="常用输入框" tips="输入框的样式根据它的功能来确定">
    <div slot="source">
      <div class="input-item">
        <div class="input-item-text">用户名：</div>
        <pa-input slot="source" placeholder="请输入内容" v-model="inputValueModel" maxlength="30"
                  error-tip="请输入正确值" :is-show-clear=true
        ></pa-input>
       </div>
      <div class="input-item">
        <div class="input-item-text">用户名：</div>
        <pa-input placeholder="请输入内容" v-model="inputValueNoClearModel" maxlength="30"
        ></pa-input>
      </div>
    </div>
    <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;">pa-input placeholder=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">请输入内容</span><span style="color:#a5c261;font-weight:bold;">" </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"inputValueModel" </span><span style="color:#e8bf6a;">error-tip=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">请输入正确值</span><span style="color:#a5c261;font-weight:bold;">"</span>&gt;&lt;/<span style="color:#e8bf6a;">pa-input</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaInput <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/input'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSampleHeader <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample-header'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">inputValueModel</span><span style="color:#cc7833;">:</span><span style="color:#a5c261;">'</span><span style="color:#a5c261;font-family:'宋体-18030';">用户名</span><span style="color:#a5c261;">'<br></span><span style="color:#a5c261;"> &nbsp; &nbsp; &nbsp;</span>};<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaInput,<br>      PaContentSample,<br>      PaContentSampleHeader<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
  </pa-content-sample>

  <pa-content-sample title="禁止用法" tips="禁止input用法">
    <pa-input slot="source" placeholder="禁止输入" :disabled=true></pa-input>
    <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;">pa-input placeholder=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">请输入内容</span><span style="color:#a5c261;font-weight:bold;">" </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"inputValueModel" </span><span style="color:#e8bf6a;">error-tip=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">请输入正确值</span><span style="color:#a5c261;font-weight:bold;">"</span>&gt;&lt;/<span style="color:#e8bf6a;">pa-input</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaInput <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/input'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSampleHeader <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample-header'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">inputValueModel</span><span style="color:#cc7833;">:</span><span style="color:#a5c261;">'</span><span style="color:#a5c261;font-family:'宋体-18030';">用户名</span><span style="color:#a5c261;">'<br></span><span style="color:#a5c261;"> &nbsp; &nbsp; &nbsp;</span>};<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaInput,<br>      PaContentSample,<br>      PaContentSampleHeader<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
  </pa-content-sample>

  <pa-content-sample title="指定输入校验类型" tips="通过type属性指定">
    <div slot="source">
      <div class="input-item">
        <div class="input-item-text">请输入：</div>
        <pa-input type="number" placeholder="只能输入数字" :is-show-clear=true
                  v-model="inputNumberValueModel"
        ></pa-input>
      </div>
      <div class="input-item">
        <div class="input-item-text">请输入：</div>
        <pa-input type="money" placeholder="只能输入金额" :is-show-clear=true
                  v-model="inputMoneyValueModel"
        ></pa-input>
      </div>
    </div>
    <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;">pa-input type=</span><span style="color:#a5c261;font-weight:bold;">"number" </span><span style="color:#e8bf6a;">placeholder=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">请输入数字</span><span style="color:#a5c261;font-weight:bold;">" </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"inputNumberValueModel"</span>&gt;&lt;/<span style="color:#e8bf6a;">pa-input</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaInput <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/input'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSampleHeader <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample-header'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">inputNumberValueModel</span><span style="color:#cc7833;">:</span><span style="color:#a5c261;">'1000'<br></span><span style="color:#a5c261;"> &nbsp; &nbsp; &nbsp;</span>};<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaInput,<br>      PaContentSample,<br>      PaContentSampleHeader<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
  </pa-content-sample>

  <pa-content-sample title="自定义输入校验" tips="只能输入字母、手机号码">
    <div slot="source">
      <div class="input-item">
        <div class="input-item-text">请输入：</div>
        <pa-input placeholder="请输入字母" data-pattern="^[a-zA-Z]*$" v-model="inputCustomValueModel"></pa-input>
      </div>
      <div class="input-item">
        <div class="input-item-text">请输入：</div>
        <pa-input placeholder="请输入手机号码" data-pattern="^(1(3|4|5|7|8){1}\d{0,9}$)|(^1?$)" v-model="inputCustomTelValueModel"></pa-input>
      </div>
    </div>
    <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-input</span><span style="color:#e8bf6a;"> placeholder=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">请输入字母</span><span style="color:#a5c261;font-weight:bold;">" </span><span style="color:#e8bf6a;">pa-data-pattern=</span><span style="color:#a5c261;font-weight:bold;">"^[a-zA-Z]*$" </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"inputCustomValueModel"</span>&gt;&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-input</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaInput <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/input'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSampleHeader <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample-header'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">inputCustomValueModel</span><span style="color:#cc7833;">:</span><span style="color:#a5c261;">'user'<br></span><span style="color:#a5c261;"> &nbsp; &nbsp; &nbsp;</span>};<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaInput,<br>      PaContentSample,<br>      PaContentSampleHeader<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
  </pa-content-sample>

  <pa-content-sample title="自定义输出校验" tips="需输入字母,否则失焦时有错误提示">
    <div slot="source" class="input-item">
      <div class="input-item-text">请输入：</div>
      <pa-input placeholder="请输入字母" :is-show-clear=true
                data-pattern-out="^[a-zA-Z]*$"
                error-text="输入错误"
                v-model="inputCustomTipValueModel"
      ></pa-input>
    </div>
    <pre slot="code"  style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;">pa-input placeholder=</span>
      <span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">请输入字母</span><span style="color:#a5c261;font-weight:bold;">" </span><span style="color:#e8bf6a;">pa-data-pattern-out=</span><span style="color:#a5c261;font-weight:bold;">"^[a-zA-Z]*$" </span><span style="color:#e8bf6a;">pa-error-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">输入错误</span><span style="color:#a5c261;font-weight:bold;">"<br></span><span style="color:#a5c261;font-weight:bold;">  </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"inputCustomTipValueModel"<br></span>&gt;&lt;/<span style="color:#e8bf6a;">pa-input</span>><br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaInput <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/input'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSampleHeader <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample-header'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">inputCustomTipValueModel</span><span style="color:#cc7833;">:</span><span style="color:#a5c261;">'name'<br></span><span style="color:#a5c261;"> &nbsp; &nbsp; &nbsp;</span>};<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaInput,<br>      PaContentSample,<br>      PaContentSampleHeader<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
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
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">error-tip</div>
          <div class="content-sample-table-row-explain">错误提示信息</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">type</div>
          <div class="content-sample-table-row-explain">指定输入校验类型</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">number(纯数字),money</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">data-pattern</div>
          <div class="content-sample-table-row-explain">自定义输入校验</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">data-pattern-out</div>
          <div class="content-sample-table-row-explain">自定义输出校验，有错误提示</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">error-text</div>
          <div class="content-sample-table-row-explain">自定义输出校验，错误提示内容</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">disabled</div>
          <div class="content-sample-table-row-explain">禁止输入</div>
          <div class="content-sample-table-row-type">Boolean</div>
          <div class="content-sample-table-row-alternative">true,false</div>
          <div class="content-sample-table-row-default">false</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">is-show-clear</div>
          <div class="content-sample-table-row-explain">是否显示清除</div>
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
