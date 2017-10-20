<template>
<div>
    <pa-content-sample-header title="图片显示 ImageShow"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="image-show组件用于显示图片">
        <div slot="source">
          <div class="demo-image-show">
            <pa-image-show background-color="gray"
                           :background-image="backgroundImage">
            </pa-image-show>
          </div>
          <p>图片自适应缩放，根据宽高比自动调整。</p>
          <div class="demo-image-show-two">
            <pa-image-show :background-image="backgroundImage"></pa-image-show>
          </div>

        </div>
        <div slot="code">
          <pre style="background-color:#2b2b2b;color:#a9b7c6;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;"><span style="color: rgb(232, 191, 106);">&lt;div&gt;<br> &nbsp; &nbsp;&lt;pa-image-show </span><span style="color: rgb(186, 186, 186);">:background-image=</span><span style="color: rgb(165, 194, 97);">"backgroundImage"</span><span style="color: rgb(232, 191, 106);">&gt;&lt;/pa-image-show&gt;<br>&lt;/div&gt;</span></span></pre>
          <pre style="background-color:#2b2b2b;color:#a9b7c6;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;"><span style="color: rgb(204, 120, 50); font-weight: bold;">import </span>ImageShowURL     <span style="color: rgb(204, 120, 50); font-weight: bold;">from </span><span style="color: rgb(106, 135, 89);">'../../assets/jpg/test.jpg'</span><span style="color: rgb(204, 120, 50);">;<br><br></span><span style="color: rgb(204, 120, 50); font-weight: bold;">export default </span>{<br>    <span style="color: rgb(255, 198, 109);">data</span>() {<br>        <span style="color: rgb(204, 120, 50); font-weight: bold;">return </span>{<br>          <span style="color: rgb(152, 118, 170);">backgroundImage</span>: <span style="color: rgb(106, 135, 89);">`url(</span>${ImageShowURL}<span style="color: rgb(106, 135, 89);">)`<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>}<span style="color: rgb(204, 120, 50);">;<br> &nbsp; &nbsp;</span>}<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">components</span>: {<br>        PaImageShow<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>PaContentSample<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>PaContentSampleHeader<br>    }<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">methods</span>: {<br><br>    }<br>}<span style="color: rgb(204, 120, 50);">;</span></span></pre>
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
        <div class="content-sample-top-alternative">可选值</div>
        <div class="content-sample-top-default">默认值</div>
      </div>
      <div class="content-sample-table">
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">backgroundColor</div>
          <div class="content-sample-table-row-explain">需要显示的背景颜色</div>
          <div class="content-sample-table-row-type">string</div>
          <div class="content-sample-table-row-alternative">transparent,gray</div>
          <div class="content-sample-table-row-default">transparent</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">backgroundImage</div>
          <div class="content-sample-table-row-explain">需要显示的背景图片</div>
          <div class="content-sample-table-row-type">string</div>
          <div class="content-sample-table-row-alternative">string</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
    import main from './main';
    import './style';
    export default main;
</script>
