<template>
<div>
    <pa-content-sample-header title="评分 Rate"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="基础的rate用法">
        <pa-rate slot="source"
          :star='rateOption.star'
          :max='rateOption.max'
          :rate-size="rateOption.size"
          :default-active="rateOption.defaultActive"
          @click.native="activeRate"
        ></pa-rate>
      <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-rate</span><span style="color:#e8bf6a;"></span><span style="color:#e8bf6a;">  :star=</span><span style="color:#a5c261;font-weight:bold;">'rateOption.star' <br></span><span style="color:#e8bf6a;">          :max=</span><span style="color:#a5c261;font-weight:bold;">'rateOption.max'<br></span><span style="color:#a5c261;font-weight:bold;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color:#e8bf6a;">:rate-size=</span><span style="color:#a5c261;font-weight:bold;">"rateOption.size"<br></span><span style="color:#a5c261;font-weight:bold;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color:#e8bf6a;">:default-active=</span><span style="color:#a5c261;font-weight:bold;">"rateOption.defaultActive"<br></span><span style="color:#a5c261;font-weight:bold;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color:#e8bf6a;">@click.native=</span><span style="color:#a5c261;font-weight:bold;">"activeRate"<br></span>&gt;&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-rate</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>Parate <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/rate'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample/index.vue'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        rateOption<span style="color:#cc7833;">:</span>{<br>          <span style="color:#bc9458;font-style:italic;">// star: '▲',<br></span><span style="color:#bc9458;font-style:italic;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;// max: 10,<br></span><span style="color:#bc9458;font-style:italic;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</span>size<span style="color:#cc7833;">: </span><span style="color:#a5c261;">'max'</span>,<br>          defaultActive<span style="color:#cc7833;">: </span><span style="color:#a5c261;">3 </span><span style="color:#bc9458;font-style:italic;">// </span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">必传<br></span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';"> &nbsp; &nbsp; &nbsp;</span>}<br>      };<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      Parate,<br>      PaContentSample<br>    },<br>    <span style="color:#d0d0ff;">methods</span><span style="color:#cc7833;">:</span>{<br>      <span style="color:#bc9458;font-style:italic;">// </span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">选中某个</span><span style="color:#bc9458;font-style:italic;">'</span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">星星</span><span style="color:#bc9458;font-style:italic;">'<br></span><span style="color:#bc9458;font-style:italic;"> &nbsp; &nbsp; &nbsp;</span><span style="color:#ffc66d;">activeRate</span>(event) {<br>        let <span style="color:#d0d0ff;">index </span><span style="color:#cc7833;">= </span><span style="color:#ffc66d;">parseInt</span>(event.<span style="color:#d0d0ff;">target</span>.<span style="color:#ffc66d;">getAttribute</span>(<span style="color:#a5c261;">'data-index'</span>), <span style="color:#a5c261;">10</span>);<br>        <span style="color:#cc7833;">if</span>(<span style="color:#cc7833;">!</span><span style="color:#d0d0ff;">index</span>) { <span style="color:#bc9458;font-style:italic;">// </span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">点击两颗</span><span style="color:#bc9458;font-style:italic;">'</span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">星星</span><span style="color:#bc9458;font-style:italic;">'</span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">之间时，</span><span style="color:#bc9458;font-style:italic;">event.target</span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">为</span><span style="color:#bc9458;font-style:italic;">a</span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';">标签<br></span><span style="color:#bc9458;font-style:italic;font-family:'宋体-18030';"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color:#cc7833;">return</span>;<br>        }<br>        let <span style="color:#d0d0ff;">isCurrentActive </span><span style="color:#cc7833;">= </span>event.<span style="color:#d0d0ff;">target</span>.<span style="color:#ffc66d;">getAttribute</span>(<span style="color:#a5c261;">'class'</span>);<br>        <span style="color:#cc7833;">if</span>(<span style="color:#d0d0ff;">index </span><span style="color:#cc7833;">=== </span><span style="color:#a5c261;">1 </span><span style="color:#cc7833;">&amp;&amp; </span><span style="color:#d0d0ff;">isCurrentActive</span>) {<br>          <span style="color:#cc7833;">this</span>.rateOption.<span style="color:#d0d0ff;">defaultActive </span><span style="color:#cc7833;">= </span><span style="color:#a5c261;">0</span>;<br>        }<span style="color:#cc7833;">else</span>{<br>          <span style="color:#cc7833;">this</span>.rateOption.<span style="color:#d0d0ff;">defaultActive </span><span style="color:#cc7833;">= </span><span style="color:#d0d0ff;">index</span>;<br>        }<br>      }<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
    </pa-content-sample>

    <pa-content-sample title="禁用状态" tips="rate不可改变">
      <pa-rate slot="source"
       :default-active="rateOption.disabledDefaultActive"
       :is-disabled=true
      ></pa-rate>
      <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-rate</span><span style="color:#e8bf6a;"> :default-active=</span><span style="color:#a5c261;font-weight:bold;">"rateOption.defaultActive" </span><span style="color:#e8bf6a;">:is-disabled=</span><span style="color:#a5c261;font-weight:bold;">true</span>&gt;&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-rate</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaRate <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/rate'</span>;<br>  <span style="color:#cc7833;">import </span>PaContentSample <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components-web/content-sample/index.vue'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        rateOption<span style="color:#cc7833;">:</span>{<br>          defaultActive<span style="color:#cc7833;">: </span><span style="color:#a5c261;">3<br></span><span style="color:#a5c261;"> &nbsp; &nbsp; &nbsp; &nbsp;</span>}<br>      };<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaRate,<br>      PaContentSample<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
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
          <div class="content-sample-table-row-parameter">star</div>
          <div class="content-sample-table-row-explain">图标类型</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">★</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">max</div>
          <div class="content-sample-table-row-explain">最多图标数量</div>
          <div class="content-sample-table-row-type">Number</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">5</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">size</div>
          <div class="content-sample-table-row-explain">图标大小</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">min,mid,max</div>
          <div class="content-sample-table-row-default">mid</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">defaultActive</div>
          <div class="content-sample-table-row-explain">默认点亮图标数,(必传)</div>
          <div class="content-sample-table-row-type">Number</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">is-disabled</div>
          <div class="content-sample-table-row-explain">是否禁用</div>
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
    import main from './main';
    export default main;
</script>
