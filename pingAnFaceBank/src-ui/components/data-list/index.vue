<template>
  <div :class="{'ui-display':!showDataList, 'data-list-content':true}" >
    <div class="table">
      <div class="table-row-group">
        <ul class="table-row" v-for="(item, index) in datalist">
          <li class="table-cell" v-if="checkFlag">
            <pa-radio v-model= "dataModel" :pa-value = item.value :pa-text=item.text></pa-radio>
          </li>
          <li class="table-cell" v-else>
            <pa-checkbox :pa-value=item.value :checkValue="checkValue" v-model="dataModel" :pa-text=item.text></pa-checkbox>
          </li>
          <li class="table-cell" v-for="obj in item">{{obj}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import './style.less';
  import main from './main';
  export default main;
</script>
