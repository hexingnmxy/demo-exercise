<template>
<div>
    <pa-content-sample-header title="标签页 tabs"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="一般用于标签、选项卡切换">
        <div slot="source">
            <!--<pa-tabs :tabs-list="tabsList" :callback="callback"></pa-tabs>-->
          <top-tab :tab-items="tabItems" :clickItem="topTabClickItem"></top-tab>
        </div>
        <div slot="code">
          <pre style="background-color:#2b2b2b;color:#a9b7c6;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;"><span style="color: rgb(232, 191, 106);">&lt;div&gt;<br> &nbsp; &nbsp;&lt;pa-tabs  </span><span style="color: rgb(186, 186, 186);">:tabs-list=</span><span style="color: rgb(165, 194, 97);">"tabsList" </span><span style="color: rgb(186, 186, 186);">:callback=</span><span style="color: rgb(165, 194, 97);">"callback"</span><span style="color: rgb(232, 191, 106);">&gt;&lt;/pa-tabs&gt;<br>&lt;/div&gt;</span></span></pre>
          <pre style="background-color:#2b2b2b;color:#a9b7c6;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;"><span style="font-size: 12px; color: rgb(204, 120, 50); font-weight: bold;">export default </span>{<br>  <span style="font-size: 12px; color: rgb(255, 198, 109);">data</span>() {<br>    <span style="font-size: 12px; color: rgb(204, 120, 50); font-weight: bold;">return </span>{<br>      <span style="font-size: 12px; color: rgb(152, 118, 170);">tabsList</span>:[<br>        {<br>          <span style="font-size: 12px; color: rgb(152, 118, 170);">title</span>: <span style="font-size: 12px; color: rgb(106, 135, 89);">'</span><span style="font-size: 12px; color: rgb(106, 135, 89); font-family: 宋体-18030;">选项一</span><span style="font-size: 12px; color: rgb(106, 135, 89);">'</span><span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="font-size: 12px; color: rgb(152, 118, 170);">active</span>: <span style="font-size: 12px; color: rgb(204, 120, 50); font-weight: bold;">true</span><span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="font-size: 12px; color: rgb(152, 118, 170);">id</span>:<span style="font-size: 12px; color: rgb(106, 135, 89);">'No1'<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>}<span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>{<br>          <span style="font-size: 12px; color: rgb(152, 118, 170);">title</span>: <span style="font-size: 12px; color: rgb(106, 135, 89);">'</span><span style="font-size: 12px; color: rgb(106, 135, 89); font-family: 宋体-18030;">选项二</span><span style="font-size: 12px; color: rgb(106, 135, 89);">'</span><span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="font-size: 12px; color: rgb(152, 118, 170);">active</span>: <span style="font-size: 12px; color: rgb(204, 120, 50); font-weight: bold;">false</span><span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="font-size: 12px; color: rgb(152, 118, 170);">id</span>:<span style="font-size: 12px; color: rgb(106, 135, 89);">'No2'<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>}<span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>{<br>          <span style="font-size: 12px; color: rgb(152, 118, 170);">title</span>: <span style="font-size: 12px; color: rgb(106, 135, 89);">'</span><span style="font-size: 12px; color: rgb(106, 135, 89); font-family: 宋体-18030;">选项三</span><span style="font-size: 12px; color: rgb(106, 135, 89);">'</span><span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="font-size: 12px; color: rgb(152, 118, 170);">active</span>: <span style="font-size: 12px; color: rgb(204, 120, 50); font-weight: bold;">false</span><span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="font-size: 12px; color: rgb(152, 118, 170);">id</span>:<span style="font-size: 12px; color: rgb(106, 135, 89);">'No3'<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>}<span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>{<br>          <span style="font-size: 12px; color: rgb(152, 118, 170);">title</span>: <span style="font-size: 12px; color: rgb(106, 135, 89);">'</span><span style="font-size: 12px; color: rgb(106, 135, 89); font-family: 宋体-18030;">选项四</span><span style="font-size: 12px; color: rgb(106, 135, 89);">'</span><span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="font-size: 12px; color: rgb(152, 118, 170);">active</span>: <span style="font-size: 12px; color: rgb(204, 120, 50); font-weight: bold;">false</span><span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="font-size: 12px; color: rgb(152, 118, 170);">id</span>:<span style="font-size: 12px; color: rgb(106, 135, 89);">'No4'<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>}<br>      ]<span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp;</span><span style="font-size: 12px; color: rgb(255, 198, 109);">callback</span>( item ) {<br><br>      }<br>    }<span style="font-size: 12px; color: rgb(204, 120, 50);">;<br> &nbsp;</span>}<span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp;</span><span style="font-size: 12px; color: rgb(152, 118, 170);">components</span>: {<br>    PaTabs<span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp;</span>PaContentSample<br>  }<span style="font-size: 12px; color: rgb(204, 120, 50);">,<br> &nbsp;</span><span style="font-size: 12px; color: rgb(152, 118, 170);">methods</span>: {<br><br>  }<br>}<span style="font-size: 12px; color: rgb(204, 120, 50);">;</span></span></pre>
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
          <div class="content-sample-table-row-parameter">tabsList</div>
          <div class="content-sample-table-row-explain">显示标签页的数组</div>
          <div class="content-sample-table-row-type">array</div>
          <div class="content-sample-table-row-alternative">array</div>
          <div class="content-sample-table-row-default">null</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">callback</div>
          <div class="content-sample-table-row-explain">点击标签的回调</div>
          <div class="content-sample-table-row-type">function</div>
          <div class="content-sample-table-row-alternative">function</div>
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
