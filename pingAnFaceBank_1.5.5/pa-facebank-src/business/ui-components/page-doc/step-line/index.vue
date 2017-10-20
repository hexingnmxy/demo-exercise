<template>
<div>
    <pa-content-sample-header title="步骤线 StepLine"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="导航进度列表">
        <div slot="source" class="step-line-wrapper">
            <pa-step-line :stepList="stepList1"></pa-step-line>
            <pa-step-line :stepList="stepList2"></pa-step-line>
            <pa-step-line :stepList="stepList3"></pa-step-line>
        </div>
        <div slot="code">
            <pre style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:10.5pt;"><span style="font-size: 12px;">&lt;<span style="color: rgb(204, 120, 51);">div</span><span style="color: rgb(165, 194, 97); font-weight: bold;">  </span><span style="color: rgb(232, 191, 106);">style=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"</span><span style="color: rgb(110, 156, 190);">height</span>: <span style="color: rgb(165, 194, 97);">650</span><span style="color: rgb(104, 232, 104); font-weight: bold;">px</span>;<span style="color: rgb(165, 194, 97); font-weight: bold;">"</span>&gt;<br>    &lt;<span style="color: rgb(204, 120, 51);">pa-step-line </span><span style="color: rgb(232, 191, 106);">:stepList=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"stepList"</span>&gt;&lt;/<span style="color: rgb(204, 120, 51);">pa-step-line</span>&gt;<br>&lt;/<span style="color: rgb(204, 120, 51);">div</span>&gt;</span><br>
            <span style="font-size: 12px;"><span style="color: rgb(151, 151, 72);">data</span>() {<br>    <span style="color: rgb(204, 120, 51);">return </span>{<br>        <span style="color: rgb(208, 208, 255);">stepList</span><span style="color: rgb(204, 120, 51);">: </span>[<br>            {<br>                <span style="color: rgb(208, 208, 255);">name</span><span style="color: rgb(204, 120, 51);">: </span><span style="color: rgb(165, 194, 97);">'step1'</span>,<br>                <span style="color: rgb(208, 208, 255);">text</span><span style="color: rgb(204, 120, 51);">: </span><span style="color: rgb(165, 194, 97);">'</span><span style="color: rgb(165, 194, 97); font-family: 宋体-18030;">第一步</span><span style="color: rgb(165, 194, 97);">'</span>,<br>                <span style="color: rgb(208, 208, 255);">isActive</span><span style="color: rgb(204, 120, 51);">: false<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>},<br>            {<br>                <span style="color: rgb(208, 208, 255);">name</span><span style="color: rgb(204, 120, 51);">: </span><span style="color: rgb(165, 194, 97);">'step2'</span>,<br>                <span style="color: rgb(208, 208, 255);">text</span><span style="color: rgb(204, 120, 51);">: </span><span style="color: rgb(165, 194, 97);">'</span><span style="color: rgb(165, 194, 97); font-family: 宋体-18030;">第二步</span><span style="color: rgb(165, 194, 97);">'</span>,<br>                <span style="color: rgb(208, 208, 255);">isActive</span><span style="color: rgb(204, 120, 51);">: true<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>},<br>            {<br>                <span style="color: rgb(208, 208, 255);">name</span><span style="color: rgb(204, 120, 51);">: </span><span style="color: rgb(165, 194, 97);">'step3'</span>,<br>                <span style="color: rgb(208, 208, 255);">text</span><span style="color: rgb(204, 120, 51);">: </span><span style="color: rgb(165, 194, 97);">'</span><span style="color: rgb(165, 194, 97); font-family: 宋体-18030;">第三步</span><span style="color: rgb(165, 194, 97);">'</span>,<br>                <span style="color: rgb(208, 208, 255);">isActive</span><span style="color: rgb(204, 120, 51);">: false<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>},<br>            {<br>                <span style="color: rgb(208, 208, 255);">name</span><span style="color: rgb(204, 120, 51);">: </span><span style="color: rgb(165, 194, 97);">'step4'</span>,<br>                <span style="color: rgb(208, 208, 255);">text</span><span style="color: rgb(204, 120, 51);">: </span><span style="color: rgb(165, 194, 97);">'</span><span style="color: rgb(165, 194, 97); font-family: 宋体-18030;">第四步</span><span style="color: rgb(165, 194, 97);">'</span>,<br>                <span style="color: rgb(208, 208, 255);">isActive</span><span style="color: rgb(204, 120, 51);">: false<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>},<br>            {<br>                <span style="color: rgb(208, 208, 255);">name</span><span style="color: rgb(204, 120, 51);">: </span><span style="color: rgb(165, 194, 97);">'step5'</span>,<br>                <span style="color: rgb(208, 208, 255);">text</span><span style="color: rgb(204, 120, 51);">: </span><span style="color: rgb(165, 194, 97);">'</span><span style="color: rgb(165, 194, 97); font-family: 宋体-18030;">第五步</span><span style="color: rgb(165, 194, 97);">'</span>,<br>                <span style="color: rgb(208, 208, 255);">isActive</span><span style="color: rgb(204, 120, 51);">: false<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>}<br>        ]<br>    };<br>},</span></pre>
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
          <div class="content-sample-table-row-parameter">stepList</div>
          <div class="content-sample-table-row-explain">导航列表数组，包括四个属性(name,text,isVisited,isActive)，详见$1</div>
          <div class="content-sample-table-row-type">Array</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">[ ]</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">$1.name</div>
          <div class="content-sample-table-row-explain">导航列表项命名，可以用来实现导航跳转</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">$1.text</div>
          <div class="content-sample-table-row-explain">导航列表项显示的文字</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">$1.isActive</div>
          <div class="content-sample-table-row-explain">控制显示当前被访问的导航列表项</div>
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
  import './style';
  export default main;
</script>
