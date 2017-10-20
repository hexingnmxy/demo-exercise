<template>
<div>
    <pa-content-sample-header title="圆点 Dot-Item"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="dot-item组件用于显示标记信息">
        <div slot="source">
            <pa-dot-item>仔细阅读相关协议</pa-dot-item>
            <pa-dot-item>需本人二代身份证</pa-dot-item>
        </div>
        <div slot="code">
          <pre style="background-color:#2b2b2b;color:#a9b7c6;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;"><span style="color: rgb(232, 191, 106);">&lt;div&gt;<br> &nbsp; &nbsp;&lt;pa-dot-item&gt; </span><span style="font-family: 宋体-18030;">仔细阅读相关协议</span><span style="color: rgb(232, 191, 106);">&lt;/pa-dot-item&gt;<br> &nbsp; &nbsp;&lt;pa-dot-item&gt; </span><span style="font-family: 宋体-18030;">需本人二代身份证</span><span style="color: rgb(232, 191, 106);">&lt;/pa-dot-item&gt;<br>&lt;/div&gt;</span></span></pre>
        </div>
    </pa-content-sample>

</div>
</template>
<script>
    import main from './main';
    import './style';
    export default main;
</script>
