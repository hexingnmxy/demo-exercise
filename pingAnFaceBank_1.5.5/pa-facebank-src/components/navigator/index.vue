<template>
  <div>
    <pa-slider-toggle v-model="sliderToggleShow">
      <div class="navigator-wrapper">
        <div class="navigator-title">
            <div class="user-info">
                <div class="user-portrait"></div>
                <div class="user-name">{{userName}}</div>
            </div>
            <div class="triangle"></div>
            <div class="title-text">{{navigatorTitle}}</div>
        </div>

        <div class="navigator-content">
          <div class="close-btn" @click="closeMenuList"><pa-icon iconType="close-btn"></pa-icon></div>
          <div class="step-line">
            <pa-step-line :stepList="stepList"></pa-step-line>
          </div>
        </div>
        <div class="navigator-footer">
          <div class="left" @click="backToDeviceHome"><pa-icon iconType="home" iconClass="iconClass"></pa-icon>返回首页</div>
          <div class="line"></div>
          <div class="right"><pa-icon iconType="bluetooth" iconClass="iconClass"></pa-icon>蓝牙设置</div>
        </div>
      </div>
    </pa-slider-toggle>
  </div>
</template>
<style lang="less" scoped>
    @import "./style.less";
</style>
<script>
    import PaButton from 'pa-ui/components/button';
    import PaIcon from 'pa-ui/components/icon';
    import PaSliderToggle from 'pa-ui/components/slider-toggle';
    import PaStepLine from '../../../pa-ui-src/components/step-line';
//    import PaMask from 'pa-ui/components/mask';
    import PaMask from '../../../pa-ui-src/components/mask';

    export default {
        props: {
            value: {},
            stepList: {},
            userName: {},
            navigatorTitle: {
                type: String,
                default() {
                    return '';
                }
            },
            onClose: {
                type: Function,
                default() {
                    return () => {};
                }
            }
        },
        components: {
            PaButton,
            PaIcon,
            PaSliderToggle,
            PaStepLine,
            PaMask
        },
        computed: {
            sliderToggleShow() {
                if(this.value) {
                    Store.state.maskDisabled = false; // 显示遮罩
                }
                return this.value;
            }
        },
        methods:{
            closeMenuList(){
                Store.state.maskDisabled = true; // 隐藏遮罩
                this.onClose();
            },
            // 退出业务，返回最初业务选择页
            backToDeviceHome() {
                this.$device.goHome();
            }
        }
    };
</script>
