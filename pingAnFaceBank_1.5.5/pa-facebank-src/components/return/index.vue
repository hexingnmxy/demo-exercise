<template>
    <div class="return-wrapper">
      <div class="return-link" @click="returnClick">
        <pa-icon iconType="direction-left-single"></pa-icon>
      </div>
      <div class="return-navigation-title">
        {{bussinessName}}
      </div>
      <div class="right-menu">
          <pa-icon iconType="navigator" @click.native="onShowNavigator"></pa-icon>
      </div>
    </div>
</template>
<style lang="less" scoped>
    @import "./style.less";
</style>
<script>
    import PaIcon from 'pa-ui/components/icon';

    export default {
        props: {
            // 导航标题
            bussinessName: {
                type: String,
                default() {
                    return '';
                }
            },
            onShowNavigator:{
                type: Function,
                default() {
                    return () => {};
                }
            }
        },
        components: {
            PaIcon
        },
        methods: {
            // 返回上一步
            returnClick() {
                Core.toBack();
            },
            // 显示菜单列表
            showMenuList() {
                Store.state.sliderToggleShow = true;
                this.sliderToggleShow = true;
            }
        }
    };
</script>
