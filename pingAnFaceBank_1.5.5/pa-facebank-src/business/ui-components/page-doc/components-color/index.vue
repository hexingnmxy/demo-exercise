<template>
    <div>
        <content-sample-header title="颜色 Color"></content-sample-header>

        <div v-for="colorItem in colors">
            <h3 class="color-title">{{colorItem.title}}</h3>
            <span class="color-exp">{{colorItem.exp}}</span>
            <ul class="color-list">
                <li
                        v-for="colorLi in colorItem.children"

                >
                    <div class="color-show"
                         :style="{
                        backgroundColor: colorLi.color,
                        borderWidth: colorLi.border ? '1px' : 0,
                        color: colorLi.text ? '#333' : '#fff'
                        }"
                    >
                        <span>{{colorLi.color}}</span>
                        <span>{{colorLi.exp}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import './style.less';
  import ContentSampleHeader from '../../components/content-sample-header/index';
  import colors              from './config-color';

  export default {
      data() {
          return {
              colors
          };
      },
      components: {
          ContentSampleHeader
      }
  };
</script>
