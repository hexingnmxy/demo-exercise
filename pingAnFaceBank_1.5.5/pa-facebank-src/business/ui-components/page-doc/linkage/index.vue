<template>
  <div>
    <pa-content-sample-header title="多级联动 Loading"></pa-content-sample-header>

    <pa-content-sample title="linkage 多级联动" tips="多级联动 实现 如地址 日历等选择功能的组件">
      <div slot="source">
        <pa-linkage :list="linkList" :change="callback" :level="level"></pa-linkage>
      </div>
      <div slot="code">
        <pre style="background-color:#2b2b2b;color:#e6e1dc;font-family:'Consolas';font-size:12.0pt;"><span style="font-size: 12px;">&lt;pa-linkage :list="linkList" :change="callback" :level="level"&gt;&lt;/pa-linkage&gt;<br></span></pre>
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
          <div class="content-sample-top-alternative" style="width: 13.2rem">可选值</div>
          <div class="content-sample-top-default">默认值</div>
        </div>
        <div class="content-sample-table">
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">list</div>
            <div class="content-sample-table-row-explain">列表</div>
            <div class="content-sample-table-row-type">Array</div>
            <div class="content-sample-table-row-alternative" style="width: 13.2rem">[{ active: false//是否选中, text: 文本, children: [list列表以此类推]}]</div>
            <div class="content-sample-table-row-default">[]</div>
          </div>
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">level</div>
            <div class="content-sample-table-row-explain">一共多少列</div>
            <div class="content-sample-table-row-type">Number</div>
            <div class="content-sample-table-row-alternative" style="width: 13.2rem">——</div>
            <div class="content-sample-table-row-default">0</div>
          </div>
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">callback</div>
            <div class="content-sample-table-row-explain">选择后的回调</div>
            <div class="content-sample-table-row-type">Function</div>
            <div class="content-sample-table-row-alternative" style="width: 13.2rem">——</div>
            <div class="content-sample-table-row-default">()=>{}</div>
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
