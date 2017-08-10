<template>

  <div>
    <div class="two-level-list-wrapper" v-for="(item,index) in firstLevelList">
      <div class="first-level-title" v-if="item.secondLevelList">{{item.title}}</div>
      <div class="second-level-wrapper" v-if="item.secondLevelList">
        <div  v-for="(items,idx) in item.secondLevelList"
              :class="['second-level-title',
              {'title-active':items.active?(activeItem=items):false}]"
              @click="itemClick(items)">
          {{items.title}}
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
