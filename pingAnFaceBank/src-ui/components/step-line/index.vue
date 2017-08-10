<template>
    <div class="component-step-line" :style="{height: componentStepLine}">
        <div class="step-line-item" v-for="step in stepLists"
             :class="{
             'step-line-item-visited' : step.isVisited,
             'step-line-item-active' : step.isActive
             }"
        >

            <div class="step-line-item-head"></div>
            <div class="step-line-item-content">
            {{step.text}}

            </div>
            <div class="step-line-item-tail"></div>
        </div>
    </div>
</template>
<script>
  import main from './main';
  import './style';
  export default main;
</script>
