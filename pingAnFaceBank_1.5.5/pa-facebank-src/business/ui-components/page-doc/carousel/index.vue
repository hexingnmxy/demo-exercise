<template>
    <div >
      <pa-content-sample-header title="轮播图 Carousel"></pa-content-sample-header>

      <pa-content-sample title="基础用法" tips="基础的按钮用法">
        <div slot="source">
          <!--<div>{{index}}</div>-->
          <div class="carousel-container">
            <carousel ref="carousel">
              <carousel-item :active="true">
                <pa-image-show :background-image="backgroundImage"></pa-image-show>
              </carousel-item>
              <carousel-item>
                <pa-image-show :background-image="backgroundImage"></pa-image-show>
              </carousel-item>
              <carousel-item>
                <pa-image-show :background-image="backgroundImage"></pa-image-show>
              </carousel-item>
              <carousel-item>
                <pa-image-show :background-image="backgroundImage"></pa-image-show>
              </carousel-item>
              <carousel-item>
                <pa-image-show :background-image="backgroundImage"></pa-image-show>
              </carousel-item>
            </carousel>
          </div>
          <div>
            <pa-button btn-size="min" btn-type="rectangle-empty-theme" @click.native="pre">pre</pa-button>
            <pa-button btn-size="min" btn-type="rectangle-empty-theme" @click.native="next">next</pa-button>
          </div>
        </div>
        <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span><span style="color:#e8bf6a;"> btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">默认按钮</span>&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-button btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min" </span><span style="color:#e8bf6a;">btn-type=</span><span style="color:#a5c261;font-weight:bold;">"empty"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">主要按钮</span>&lt;/<span style="color:#e8bf6a;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>    <span style="color:#cc7833;">import </span>PaButton <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/button'</span>;<br><br>    <span style="color:#cc7833;">export default </span>{<br>        <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>            PaButton<br>        }<br>    };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
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
              <div class="content-sample-table-row-parameter">active</div>
              <div class="content-sample-table-row-explain">默认展示页面</div>
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
