<template>
  <div>
    <pa-content-sample-header title="列表弹框 popDataList"></pa-content-sample-header>

    <pa-content-sample title="列表弹框" tips="列表弹框">
      <div slot="source">
        <pa-button @click.native="openPopDataList" btn-size="max" btn-type="rectangle-full">打开列表弹框</pa-button>
      </div>
      <div slot="code">
        hello
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
            <div class="content-sample-table-row-parameter">disabled</div>
            <div class="content-sample-table-row-explain">是否禁用</div>
            <div class="content-sample-table-row-type">Boolean</div>
            <div class="content-sample-table-row-alternative">true,false</div>
            <div class="content-sample-table-row-default">false</div>
          </div>
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">datalist</div>
            <div class="content-sample-table-row-explain">列表数组</div>
            <div class="content-sample-table-row-type">Array</div>
            <div class="content-sample-table-row-alternative">[]</div>
            <div class="content-sample-table-row-default">[]</div>
          </div>
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">popTitle</div>
            <div class="content-sample-table-row-explain">弹框标题</div>
            <div class="content-sample-table-row-type">String</div>
            <div class="content-sample-table-row-alternative">String</div>
            <div class="content-sample-table-row-default">提示</div>
          </div>
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">checkFlag</div>
            <div class="content-sample-table-row-explain">true:单选 false:多选</div>
            <div class="content-sample-table-row-type">Boolean</div>
            <div class="content-sample-table-row-alternative">true/false</div>
            <div class="content-sample-table-row-default">false</div>
          </div>
          <div class="content-sample-table-row">
            <div class="content-sample-table-row-parameter">checkValue</div>
            <div class="content-sample-table-row-explain">默认选中的数据</div>
            <div class="content-sample-table-row-type">String/Array</div>
            <div class="content-sample-table-row-alternative">String/Array</div>
            <div class="content-sample-table-row-default">''/[]</div>
          </div>
        </div>
      </div>
    </div>

    <pa-pop-data-list
      :finish="finish"
      :popTitle="popTitle"
      :datalist="datalist"
      :checkFlag="checkFlag"
      :checkValue="checkValue"
      v-model="disabled"
    ></pa-pop-data-list>

  </div>
</template>
<script>
  import './style.less';
  import main from './main';
  export default main;

</script>


