<template>
  <div class="left-nav">
    <div v-for="(item,index) in navTrunkList" class="left-nav-item">
      <div class="left-nav-trunk-title" @click="toggleHide(item, $event)">{{item.title}}</div>

      <div :class="{'left-nav-hide':item.hide}" class="left-nav-branch">
        <div  v-if="item.list" v-for="(items,index) in item.navBranchList" class="left-nav-branch-item">

          <div
            :class="['left-nav-branch-title',
                        {
                        'left-nav-branch-title-active':items.active?(activeItem=items):false
                        }
                        ]"
            @click="openComponents(items, $event)">
            <span class="left-nav-branch-title-text">{{items.title}}</span>
            <span class="left-nav-branch-title-entitle">{{items.enTitle}}</span>
          </div>
          <!--<div :class="{'left-nav-hide':items.hide}">-->
          <!--<div v-if="items.list" v-for="(itemss,index) in items.navLeafList">-->
          <!--<div class="left-nav-leaf">{{itemss.title}}</div>-->
          <!--</div>-->
          <!--</div>-->

        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import './style';
    import main from './main';
    export default main;
</script>
