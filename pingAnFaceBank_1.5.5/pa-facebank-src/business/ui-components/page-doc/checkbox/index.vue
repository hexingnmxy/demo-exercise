<template>
<div>
  <pa-content-sample-header title="复选框 Checkbox"></pa-content-sample-header>

  <pa-content-sample title="基础用法" tips="单独使用可以表示两种状态之间的切换">
    <pa-checkbox slot="source" v-model="paSingleValueModel" pa-text="本人已阅读并同意"></pa-checkbox>

    <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-checkbox</span><span style="color:#e8bf6a;"> v-model=</span><span style="color:#a5c261;font-weight:bold;">"paSingleValueModel" </span><span style="color:#e8bf6a;">pa-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">单独使用</span><span style="color:#a5c261;font-weight:bold;">"</span>&gt;&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-checkbox</span>&gt;<br><br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaCheckbox <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/checkbox'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">paSingleValueModel</span><span style="color:#cc7833;">: false<br></span><span style="color:#cc7833;"> &nbsp; &nbsp; &nbsp;</span>};<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaCheckbox<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
  </pa-content-sample>

  <pa-content-sample title="多选框组" tips="适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项">
    <div slot="source">
      <div class="multiple-checkbox">
        <pa-checkbox pa-value="apple" v-model="paMultipleValueModel" pa-text="苹果"></pa-checkbox>
        <pa-checkbox pa-value="pear" v-model="paMultipleValueModel" pa-text="雪梨"></pa-checkbox>
        <pa-checkbox pa-value="watermelon" v-model="paMultipleValueModel" pa-text="西瓜"></pa-checkbox>
      </div>
    </div>
    <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;">pa-checkbox pa-value=</span><span style="color:#a5c261;font-weight:bold;">"apple" </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"paMultipleValueModel" </span><span style="color:#e8bf6a;">pa-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">苹果</span><span style="color:#a5c261;font-weight:bold;">"</span>&gt;&lt;/<span style="color:#e8bf6a;">pa-checkbox</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-checkbox pa-value=</span><span style="color:#a5c261;font-weight:bold;">"pear" </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"paMultipleValueModel" </span><span style="color:#e8bf6a;">pa-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">雪梨</span><span style="color:#a5c261;font-weight:bold;">"</span>&gt;&lt;/<span style="color:#e8bf6a;">pa-checkbox</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-checkbox pa-value=</span><span style="color:#a5c261;font-weight:bold;">"watermelon" </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"paMultipleValueModel" </span><span style="color:#e8bf6a;">pa-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">西瓜</span><span style="color:#a5c261;font-weight:bold;">"</span>&gt;&lt;/<span style="color:#e8bf6a;">pa-checkbox</span>&gt;<br><br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaCheckbox <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/checkbox'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">paMultipleValueModel</span><span style="color:#cc7833;">: </span>[<span style="color:#a5c261;">'apple'</span>]<br>      };<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaCheckbox<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
  </pa-content-sample>

  <pa-content-sample title="禁用状态" tips="禁用多选框不可用状态">
    <div slot="source">
      <div class="multiple-checkbox">
        <pa-checkbox pa-value="bus" :disabled=true v-model="vehicleCheckbox" pa-text="公交车"></pa-checkbox>
        <pa-checkbox pa-value="bike" :disabled=true v-model="vehicleCheckbox" pa-text="自行车"></pa-checkbox>
      </div>
    </div>
    <pre slot="code" style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:9.0pt;">&lt;<span style="color:#e8bf6a;background-color:#3c3c57;">pa-checkbox</span><span style="color:#e8bf6a;"> pa-value=</span><span style="color:#a5c261;font-weight:bold;">"bus" </span><span style="color:#e8bf6a;">:disabled=</span><span style="color:#a5c261;font-weight:bold;">true </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"vehicleCheckbox" </span><span style="color:#e8bf6a;">pa-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">公交车</span><span style="color:#a5c261;font-weight:bold;">"</span>&gt;&lt;/<span style="color:#e8bf6a;background-color:#3c3c57;">pa-checkbox</span>&gt;<br>&lt;<span style="color:#e8bf6a;">pa-checkbox pa-value=</span><span style="color:#a5c261;font-weight:bold;">"bike" </span><span style="color:#e8bf6a;">:disabled=</span><span style="color:#a5c261;font-weight:bold;">true </span><span style="color:#e8bf6a;">v-model=</span><span style="color:#a5c261;font-weight:bold;">"vehicleCheckbox" </span><span style="color:#e8bf6a;">pa-text=</span><span style="color:#a5c261;font-weight:bold;">"</span><span style="color:#a5c261;font-weight:bold;font-family:'宋体-18030';">自行车</span><span style="color:#a5c261;font-weight:bold;">"</span>&gt;&lt;/<span style="color:#e8bf6a;">pa-checkbox</span>&gt;<br><br>&lt;<span style="color:#e8bf6a;">script</span>&gt;<br>  <span style="color:#cc7833;">import </span>PaCheckbox <span style="color:#cc7833;">from </span><span style="color:#a5c261;">'../../components/checkbox'</span>;<br><br>  <span style="color:#cc7833;">export default </span>{<br>    <span style="color:#ffc66d;">data</span>() {<br>      <span style="color:#cc7833;">return </span>{<br>        <span style="color:#d0d0ff;">vehicleCheckbox</span><span style="color:#cc7833;">: </span>[<span style="color:#a5c261;">'bike'</span>]<br>      };<br>    },<br>    <span style="color:#d0d0ff;">components</span><span style="color:#cc7833;">: </span>{<br>      PaCheckbox<br>    }<br>  };<br>&lt;/<span style="color:#e8bf6a;">script</span>&gt;</pre>
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
          <div class="content-sample-table-row-parameter">value</div>
          <div class="content-sample-table-row-explain">备选项代表的值</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">pa-text</div>
          <div class="content-sample-table-row-explain">选项名称</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">——</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">disabled</div>
          <div class="content-sample-table-row-explain">禁用状态</div>
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
