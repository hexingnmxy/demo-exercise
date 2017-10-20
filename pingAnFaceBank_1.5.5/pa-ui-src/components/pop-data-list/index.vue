<template>
  <pa-pop-box
    :buttons="buttons"
    :disabled="value"
    :finish="finishBox"
  >
    <!--<pa-pop-header-->
      <!--:popTitle="popTitle"-->
      <!--:showPopHeader="showPopHeader"-->
      <!--:showIcon="showIcon"-->
      <!--:popBoxCloseFun="popBoxCloseFun"-->
    <!--&gt;</pa-pop-header>-->
    <pa-data-list
      ref="popDataList"
      :datalist="datalist"
      :showDataList="showDataList"
      :checkFlag="checkFlag"
      v-model="popDataModel"
      :checkValue="checkValue"
    ></pa-data-list>
  </pa-pop-box>
</template>
<script>
  import './style.less';
  import main from './main';
  export default main;
</script>
