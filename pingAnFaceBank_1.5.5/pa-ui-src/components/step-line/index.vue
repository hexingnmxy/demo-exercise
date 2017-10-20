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
  import './style';
  export default {
      data() {
          return {
              // componentStepLine: '100%'
          };
      },
      props: {
          stepList: {
              type: Array,
              default() {
                  return [

                  ];
              }
          }
      },
      computed: {
          stepLists() {
              let stepLists = [];
              let visited = true;
              for (let i = 0; this.stepList[i]; i++) {
                  const stepListItem = this.stepList[i];

                  if (stepListItem.isActive && visited) {
                      visited = false;
                  }

                  stepListItem.isVisited = visited;
                  stepLists.push(stepListItem);
              }
              return stepLists;
          },
          componentStepLine() {
              if (this.stepList.length === 3) return '50%';
              if (this.stepList.length === 4) return '65%';
              if (this.stepList.length === 5) return '80%';
              return '100%';
          }
      },
      components: {

      }
  };

</script>
