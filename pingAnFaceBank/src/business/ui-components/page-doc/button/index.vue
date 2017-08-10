<template>
<div>
    <pa-content-sample-header title="按钮 Button"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="基础的按钮用法">
        <div slot="source">
            <div class="button-base-line1">
              <pa-button btn-size="min" btn-type="rectangle-empty-theme">新加坡元</pa-button>
              <pa-button btn-size="min" btn-type="rectangle-empty">新加坡元</pa-button>
              <pa-button btn-size="min" btn-type="rectangle-empty-green">人民币</pa-button>
              <pa-button btn-size="min" btn-type="rectangle-empty-green-icon" btn-icon="icon-search">邮编查询</pa-button>
            </div>
            <div class="button-base-line2">
              <pa-button btn-size="max" btn-type="rectangle-full">请重新刷卡</pa-button>
              <pa-button btn-size="max" btn-type="rectangle-full">立即开卡</pa-button>
              <pa-button btn-size="max" btn-type="rectangle-full">下一步</pa-button>
              <pa-button btn-size="max" btn-type="rectangle-full">确&nbsp;&nbsp;定</pa-button>
            </div>
        </div>
        <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span><span style="color:#e8bf6a;"> btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">默认按钮</span>&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-button btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min" </span><span style="color:#e8bf6a;">btn-type=</span><span style="color:#a5c261;font-weight:bold;">"empty"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">主要按钮</span>&lt;/<span style="color:#e8bf6a;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>    <span style="color:#cc7833;">import </span>PaButton <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/button'</span>;<br><br>    <span style="color:#cc7833;">export default </span>{<br>        <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>            PaButton<br>        }<br>    };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
    </pa-content-sample>

    <pa-content-sample title="禁用状态" tips="主要用于页面中暂不实现跳转页面功能按钮">
        <div slot="source">
            <pa-button btn-size="max" :btn-disabled=true btn-type="rectangle-full">立即开卡</pa-button>
            <pa-button btn-size="min" :btn-disabled=true btn-type="rectangle-empty">新加坡元</pa-button>
            <pa-button btn-size="x-min" :btn-disabled=true btn-type="rectangle-empty">60s</pa-button>
        </div>
        <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span><span style="color:#e8bf6a;"> btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min" </span><span style="color:#e8bf6a;">:btn-disabled=</span><span style="color:#a5c261;font-weight:bold;">true</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">默认按钮</span>&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-button btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min" </span><span style="color:#e8bf6a;">:btn-disabled=</span><span style="color:#a5c261;font-weight:bold;">true </span><span style="color:#e8bf6a;">btn-type=</span><span style="color:#a5c261;font-weight:bold;">"empty"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">主要按钮</span>&lt;/<span style="color:#e8bf6a;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>    <span style="color:#cc7833;">import </span>PaButton <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/button'</span>;<br><br>    <span style="color:#cc7833;">export default </span>{<br>        <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>            PaButton<br>        }<br>    };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
    </pa-content-sample>

    <pa-content-sample title="弹框按钮" tips="主要用于页面弹框按钮">
      <div slot="source">
        <pa-button btn-size="mid" btn-type="rectangle-full">确&nbsp;&nbsp;定</pa-button>
      </div>
      <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span><span style="color:#e8bf6a;"> btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min" </span><span style="color:#e8bf6a;">:btn-disabled=</span><span style="color:#a5c261;font-weight:bold;">true</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">默认按钮</span>&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-button btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min" </span><span style="color:#e8bf6a;">:btn-disabled=</span><span style="color:#a5c261;font-weight:bold;">true </span><span style="color:#e8bf6a;">btn-type=</span><span style="color:#a5c261;font-weight:bold;">"empty"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">主要按钮</span>&lt;/<span style="color:#e8bf6a;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>    <span style="color:#cc7833;">import </span>PaButton <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/button'</span>;<br><br>    <span style="color:#cc7833;">export default </span>{<br>        <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>            PaButton<br>        }<br>    };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
    </pa-content-sample>

    <!--<pa-content-sample title="不同尺寸" tips="Button组件提供了三种尺寸">-->
        <!--<div slot="source">-->
          <!--<pa-button btn-size="min" btn-type="rectangle-full">小按钮</pa-button>-->
          <!--<pa-button btn-size="mid" btn-type="rectangle-full">中按钮</pa-button>-->
          <!--<pa-button btn-size="max" btn-type="rectangle-full">大按钮</pa-button>-->
        <!--</div>-->
        <!--<pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span><span style="color:#e8bf6a;"> btn-size=</span><span style="color:#a5c261;font-weight:bold;">"max"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">大按钮</span>&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-button btn-size=</span><span style="color:#a5c261;font-weight:bold;">"mid"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">中按钮</span>&lt;/<span style="color:#e8bf6a;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-button btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">小按钮</span>&lt;/<span style="color:#e8bf6a;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>    <span style="color:#cc7833;">import </span>PaButton <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/button'</span>;<br><br>    <span style="color:#cc7833;">export default </span>{<br>        <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>            PaButton<br>        }<br>    };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>-->
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
          <div class="content-sample-table-row-parameter">btn-type</div>
          <div class="content-sample-table-row-explain">按钮类型</div>
          <div class="content-sample-table-row-type">string</div>
          <div class="content-sample-table-row-alternative" style="width: 13.2rem">empty,full,rectangle-empty,rectangle-empty-theme,rectangle-full</div>
          <div class="content-sample-table-row-default">full</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">btn-icon</div>
          <div class="content-sample-table-row-explain">按钮图标</div>
          <div class="content-sample-table-row-type">string</div>
          <div class="content-sample-table-row-alternative" style="width: 13.2rem">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">btn-size</div>
          <div class="content-sample-table-row-explain">按钮尺寸</div>
          <div class="content-sample-table-row-type">string</div>
          <div class="content-sample-table-row-alternative" style="width: 13.2rem">x-min,min,mid,max</div>
          <div class="content-sample-table-row-default">mid</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">btn-disabled</div>
          <div class="content-sample-table-row-explain">按钮禁用</div>
          <div class="content-sample-table-row-type">Boolean</div>
          <div class="content-sample-table-row-alternative" style="width: 13.2rem">true,false</div>
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
