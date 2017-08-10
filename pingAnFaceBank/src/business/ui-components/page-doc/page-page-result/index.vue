<template>
<div>
  <pa-content-sample-header title="结果页面 PageResult"></pa-content-sample-header>

  <pa-content-sample title="基础用法" tips="结果页面">
    <div slot="source">
      <page-result :loc-code="LocCode" :pro-id="proId" :result-status="state">
        <div v-if="state">
          <div>
            尊敬的{{resultData.CifName}}先生/女士：
            <p class="text-wrapper">
              您的卡号为<span class="text-card-no">{{resultData.CardNo}}</span>的<span class="text-card-no">{{resultData.CertName}}</span>已成功开户。请收好您的证件，取走您的卡片。欢迎再次使用移动柜面服务！
            </p>
          </div>
        </div>
        <div v-if="!state">
          抱歉！交易失败，欢迎再次使用我行远程柜面渠道！
        </div>
      </page-result>
    </div>
    <!--<pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span><span style="color:#e8bf6a;"> btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">默认按钮</span>&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-button btn-size=</span><span style="color:#a5c261;font-weight:bold;">"min" </span><span style="color:#e8bf6a;">btn-type=</span><span style="color:#a5c261;font-weight:bold;">"empty"</span>&gt;<span style="font-weight:bold;font-family:'宋体-18030';">主要按钮</span>&lt;/<span style="color:#e8bf6a;">pa-button</span>&gt;<br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>    <span style="color:#cc7833;">import </span>PaButton <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/button'</span>;<br><br>    <span style="color:#cc7833;">export default </span>{<br>        <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>            PaButton<br>        }<br>    };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>-->
  </pa-content-sample>


  <!--<div>-->
    <!--<h3 class="content-sample-table-title">Attributes</h3>-->
    <!--<p class="content-sample-table-tips">参数详情数据列表显示</p>-->
    <!--<div class="content-sample-table-wrapper">-->
      <!--<div class="content-sample-top">-->
        <!--<div class="content-sample-top-parameter">参数</div>-->
        <!--<div class="content-sample-top-explain">说明</div>-->
        <!--<div class="content-sample-top-type">类型</div>-->
        <!--<div class="content-sample-top-alternative" style="width: 13.2rem">可选值</div>-->
        <!--<div class="content-sample-top-default">默认值</div>-->
      <!--</div>-->
      <!--<div class="content-sample-table">-->
        <!--<div class="content-sample-table-row">-->
          <!--<div class="content-sample-table-row-parameter">btn-type</div>-->
          <!--<div class="content-sample-table-row-explain">按钮类型</div>-->
          <!--<div class="content-sample-table-row-type">string</div>-->
          <!--<div class="content-sample-table-row-alternative" style="width: 13.2rem">empty,full,rectangle-empty,rectangle-empty-theme,rectangle-full</div>-->
          <!--<div class="content-sample-table-row-default">full</div>-->
        <!--</div>-->
        <!--<div class="content-sample-table-row">-->
          <!--<div class="content-sample-table-row-parameter">btn-icon</div>-->
          <!--<div class="content-sample-table-row-explain">按钮图标</div>-->
          <!--<div class="content-sample-table-row-type">string</div>-->
          <!--<div class="content-sample-table-row-alternative" style="width: 13.2rem">——</div>-->
          <!--<div class="content-sample-table-row-default">——</div>-->
        <!--</div>-->
        <!--<div class="content-sample-table-row">-->
          <!--<div class="content-sample-table-row-parameter">btn-size</div>-->
          <!--<div class="content-sample-table-row-explain">按钮尺寸</div>-->
          <!--<div class="content-sample-table-row-type">string</div>-->
          <!--<div class="content-sample-table-row-alternative" style="width: 13.2rem">x-min,min,mid,max</div>-->
          <!--<div class="content-sample-table-row-default">mid</div>-->
        <!--</div>-->
        <!--<div class="content-sample-table-row">-->
          <!--<div class="content-sample-table-row-parameter">btn-disabled</div>-->
          <!--<div class="content-sample-table-row-explain">按钮禁用</div>-->
          <!--<div class="content-sample-table-row-type">Boolean</div>-->
          <!--<div class="content-sample-table-row-alternative" style="width: 13.2rem">true,false</div>-->
          <!--<div class="content-sample-table-row-default">false</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
</div>
</template>
<script>
  import './style.less';
  import main from './main';
  export default main;
</script>
