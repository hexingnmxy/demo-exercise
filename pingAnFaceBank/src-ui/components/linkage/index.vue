<template>
<div class="linkage-box">
  <div class="linkage-line" ></div>

  <div class="linkage-li" v-for="index in level">
    <div
      class="linkage-items"
      :style="{'top': styleTop[index-1].top?styleTop[index-1].top:currentList[index-1].top}"
      @touchstart="start($event, index - 1 )"
      @touchmove="move($event, index - 1 )"
      @touchend="end($event, index - 1 )"
      @mousedown="start($event, index - 1 )"
      @mousemove="move($event, index - 1 )"
      @mouseup="end($event, index - 1 )"
      @mouseout="end($event, index - 1 )"
    >
      <div
        class="linkage-item"
        v-for="items in currentList[index-1].list"
      >
        {{items.text}}
      </div>
    </div>
    <div class="linkage-mask-bottom" :style="{'height': styleTop[index-1].maskBottom}"></div>
  </div>
</div>
</template>
<script>
    import './style';
    import main from './main';
    export default main;
</script>
