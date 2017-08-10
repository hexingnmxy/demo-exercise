<template>
<div>
    <pa-content-sample-header title="二级菜单 TwoLevelList"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="two-level-list组件用于显示二级菜单">
        <div slot="source">
            <pa-two-level-list :first-level-list="firstLevelList"
                               v-on:itemClick="itemClick"
                                >
            </pa-two-level-list>
        </div>

        <div slot="code">
          <pre style="background-color:#2b2b2b;color:#a9b7c6;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;"><span style="color: rgb(232, 191, 106);">&lt;div&gt;<br> &nbsp; &nbsp;&lt;pa-two-level-list </span><span style="color: rgb(186, 186, 186);">:first-level-list=</span><span style="color: rgb(165, 194, 97);">"firstLevelList"<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span style="color: rgb(152, 118, 170);">v-on</span><span style="color: rgb(186, 186, 186);">:itemClick=</span><span style="color: rgb(165, 194, 97);">"itemClick"<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(232, 191, 106);">&gt;<br> &nbsp; &nbsp;&lt;/pa-two-level-list&gt;<br>&lt;/div&gt;</span></span></pre>
          <pre style="background-color:#2b2b2b;color:#a9b7c6;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;"><span style="color: rgb(204, 120, 50); font-weight: bold;">export default </span>{<br>    <span style="color: rgb(255, 198, 109);">data</span>() {<br>        <span style="color: rgb(204, 120, 50); font-weight: bold;">return </span>{<br>          <span style="color: rgb(152, 118, 170);">firstLevelList</span>:[<br>            {<br>              <span style="color: rgb(152, 118, 170);">title</span>: <span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(106, 135, 89); font-family: 宋体-18030;">颜色</span><span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">list</span>:<span style="color: rgb(204, 120, 50); font-weight: bold;">true</span><span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">secondLevelList</span>:[<br>                {<br>                  <span style="color: rgb(152, 118, 170);">title</span>: <span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(106, 135, 89); font-family: 宋体-18030;">红色</span><span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">active</span>: <span style="color: rgb(204, 120, 50); font-weight: bold;">true<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>}<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>{<br>                  <span style="color: rgb(152, 118, 170);">title</span>: <span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(106, 135, 89); font-family: 宋体-18030;">绿色</span><span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">active</span>: <span style="color: rgb(204, 120, 50); font-weight: bold;">false<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>}<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>{<br>                  <span style="color: rgb(152, 118, 170);">title</span>: <span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(106, 135, 89); font-family: 宋体-18030;">蓝色</span><span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">active</span>: <span style="color: rgb(204, 120, 50); font-weight: bold;">false<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>}<br>              ]<br>            }<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>{<br>              <span style="color: rgb(152, 118, 170);">title</span>: <span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(106, 135, 89); font-family: 宋体-18030;">一级菜单</span><span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">list</span>:<span style="color: rgb(204, 120, 50); font-weight: bold;">true</span><span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">secondLevelList</span>:[<br>                {<br>                  <span style="color: rgb(152, 118, 170);">title</span>: <span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(106, 135, 89); font-family: 宋体-18030;">二级菜单</span><span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">active</span>: <span style="color: rgb(204, 120, 50); font-weight: bold;">false<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>}<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>{<br>                  <span style="color: rgb(152, 118, 170);">title</span>: <span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(106, 135, 89); font-family: 宋体-18030;">三级菜单</span><span style="color: rgb(106, 135, 89);">'</span><span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">active</span>: <span style="color: rgb(204, 120, 50); font-weight: bold;">false<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>}<br>              ]<br>            }<br>          ]<br>        }<span style="color: rgb(204, 120, 50);">;<br> &nbsp; &nbsp;</span>}<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">components</span>: {<br>        PaTwoLevelList<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>PaContentSample<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp; &nbsp; &nbsp;</span>PaContentSampleHeader<br>    }<span style="color: rgb(204, 120, 50);">,<br> &nbsp; &nbsp;</span><span style="color: rgb(152, 118, 170);">methods</span>: {<br>      <span style="color: rgb(255, 198, 109);">itemClick</span>( item ) {<br>        <span style="color: rgb(152, 118, 170);">console</span>.<span style="color: rgb(255, 198, 109);">log</span>(item.<span style="color: rgb(152, 118, 170);">title</span>)<span style="color: rgb(204, 120, 50);">;<br> &nbsp; &nbsp; &nbsp;</span>}<br>    }<br>}<span style="color: rgb(204, 120, 50);">;</span></span></pre>
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
          <div class="content-sample-table-row-parameter">firstLevelList</div>
          <div class="content-sample-table-row-explain">需要显示的列表数组</div>
          <div class="content-sample-table-row-type">array</div>
          <div class="content-sample-table-row-alternative">array</div>
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
