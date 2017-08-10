<template>
  <div>
    <pa-content-sample-header title="开关 Switch"></pa-content-sample-header>

    <pa-content-sample title="关闭、打开状态" tips="用户可切换">
      <div slot="source">
        <pa-switch v-model="checked"></pa-switch>
      </div>
      <div slot="code">
        <pre style="background-color:#2b2b2b;color:#a9b7c6;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;"><span style="font-size: 12px; color: rgb(232, 191, 106);">&lt;div&gt;<br> &nbsp;&lt;pa-switch </span><span style="font-size: 12px; color: rgb(186, 186, 186);">:checked=</span><span style="font-size: 12px; color: rgb(165, 194, 97);">"true"</span><span style="font-size: 12px; color: rgb(232, 191, 106);">&gt;&lt;/pa-switch&gt;<br>&lt;/div&gt;</span></span></pre>
      </div>
    </pa-content-sample>

    <!--<pa-content-sample title="关闭、打开禁止状态" tips="用户不可切换">-->
      <!--<div slot="source">-->
        <!--<pa-switch :disabled="true"></pa-switch>&nbsp;&nbsp;&nbsp;&nbsp;-->
        <!--<pa-switch :checked="true" :disabled="true"></pa-switch>-->
      <!--</div>-->
      <!--<div slot="code">-->
        <!--<pre style="background-color:#2b2b2b;color:#a9b7c6;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;"><span style="font-size: 12px; color: rgb(232, 191, 106);">&lt;div&gt;<br> &nbsp;&lt;pa-switch </span><span style="font-size: 12px; color: rgb(186, 186, 186);">:checked=</span><span style="font-size: 12px; color: rgb(165, 194, 97);">"true" </span><span style="font-size: 12px; color: rgb(186, 186, 186);">:disabled=</span><span style="font-size: 12px; color: rgb(165, 194, 97);">"true"</span><span style="font-size: 12px; color: rgb(232, 191, 106);">&gt;&lt;/pa-switch&gt;<br>&lt;/div&gt;</span></span></pre>-->
      <!--</div>-->
    <!--</pa-content-sample>-->

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
            <div class="content-sample-table-row-parameter">checked</div>
            <div class="content-sample-table-row-explain">关闭、打开</div>
            <div class="content-sample-table-row-type">Boolean</div>
            <div class="content-sample-table-row-alternative">true,false</div>
            <div class="content-sample-table-row-default">false</div>
          </div>
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">disabled</div>
            <div class="content-sample-table-row-explain">是否禁止</div>
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
