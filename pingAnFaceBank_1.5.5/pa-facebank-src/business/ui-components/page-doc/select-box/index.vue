<template>
<div>
    <pa-content-sample-header title="选择列表 selectBox"></pa-content-sample-header>

    <pa-content-sample title="基础用法" tips="selectBox 选择列表">
        <div slot="source">
            <pa-select-box>
                <pa-select-item radio-value="0" v-model="radioModel">
                  <pa-select-text>518000</pa-select-text>
                  <pa-select-text>广东省深圳市福田区保税区平安科技中心4F</pa-select-text>

                </pa-select-item>
                <pa-select-item radio-value="1" v-model="radioModel">
                  <pa-select-text>271400</pa-select-text>
                  <pa-select-text>山东省济南市市中区泉城路58号</pa-select-text>
                </pa-select-item>
                <pa-select-item radio-value="3" v-model="radioModel">
                  <pa-select-text>721231</pa-select-text>
                  <pa-select-text>四川省成都市市中区火车站东路2号</pa-select-text>
                </pa-select-item>
            </pa-select-box>
        </div>
        <div slot="code">
            <pre style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:10.5pt;"><span style="font-size: 12px;">&lt;<span style="color: rgb(204, 120, 51);">pa-select-box</span>&gt;<br>    &lt;<span style="color: rgb(204, 120, 51);">pa-select-item </span><span style="color: rgb(232, 191, 106);">radio-value=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"0" </span><span style="color: rgb(232, 191, 106);">v-model=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"radioModel"</span>&gt;<br>        &lt;<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<span style="font-weight: bold;">323</span>&lt;/<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<br>        &lt;<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<span style="font-weight: bold;">3121223</span>&lt;/<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<br>    &lt;/<span style="color: rgb(204, 120, 51);">pa-select-item</span>&gt;<br>    &lt;<span style="color: rgb(204, 120, 51);">pa-select-item </span><span style="color: rgb(232, 191, 106);">radio-value=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"1" </span><span style="color: rgb(232, 191, 106);">v-model=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"radioModel"</span>&gt;<br>        &lt;<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<span style="font-weight: bold;">323</span>&lt;/<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<br>        &lt;<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<span style="font-weight: bold;">3121223</span>&lt;/<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<br>    &lt;/<span style="color: rgb(204, 120, 51);">pa-select-item</span>&gt;<br>    &lt;<span style="color: rgb(204, 120, 51);">pa-select-item </span><span style="color: rgb(232, 191, 106);">radio-value=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"3" </span><span style="color: rgb(232, 191, 106);">v-model=</span><span style="color: rgb(165, 194, 97); font-weight: bold;">"radioModel"</span>&gt;<br>        &lt;<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<span style="font-weight: bold;">32da3</span>&lt;/<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<br>        &lt;<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<span style="font-weight: bold;">3121223</span>&lt;/<span style="color: rgb(204, 120, 51);">pa-select-text</span>&gt;<br>    &lt;/<span style="color: rgb(204, 120, 51);">pa-select-item</span>&gt;<br>&lt;/<span style="color: rgb(204, 120, 51);">pa-select-box</span>&gt;</span></pre>
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
          <div class="content-sample-table-row-parameter">radioModel</div>
          <div class="content-sample-table-row-explain">单选按钮动态绑定的值</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">String</div>
          <div class="content-sample-table-row-default">——</div>
        </div>
        <div class="content-sample-table-row">
          <div class="content-sample-table-row-parameter">radio-value</div>
          <div class="content-sample-table-row-explain">每个单选按钮的值</div>
          <div class="content-sample-table-row-type">String</div>
          <div class="content-sample-table-row-alternative">String</div>
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
