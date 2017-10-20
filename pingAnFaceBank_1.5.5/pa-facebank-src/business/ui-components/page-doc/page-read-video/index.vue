<template>
<div>
    <pa-content-sample-header title="视频认证 ReadVideo"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="基础的按钮用法">
        <div slot="source">
          <read-video
            :business-id="proId"
            :business-no="BusinessJnlNo"
            :finish="finish"
            :error="error"
            :pdfFinish="pdfFinish"
            link-previous="/upload-card-id"
          ></read-video>
        </div>
        <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span><span style="color:#e8bf6a;"> btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">默认按钮</span>&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-button btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min" </span><span style="color:#e8bf6a;">btn-type=</span><span style="color:#a5c261;font-weight:bold;">"empty"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">主要按钮</span>&lt;/<span style="color:#e8bf6a;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>    <span style="color:#cc7833;">import </span>PaButton <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/button'</span>;<br><br>    <span style="color:#cc7833;">export default </span>{<br>        <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>            PaButton<br>        }<br>    };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
    </pa-content-sample>
</div>
</template>
<script>
  import './style.less';
  import main from './main';
  export default main;
</script>
