<template>
    <div>
     <!--  <pa-loading :text="loadingPopText" :disabled="loadingPopDisabled"></pa-loading>
        <pa-pop-box :buttons="popBoxButtons" :disabled="popBoxDisabled" :finish="popBoxFinish">
            <div v-if="popBoxIcon" :class="['pop-icon', popBoxIcon]"></div>
            {{popBoxText}}
        </pa-pop-box>
      <router-view></router-view> -->
       <doc-step-line></doc-step-line>
       <pa-step-line :stepList="stepList1"></pa-step-line>
    </div>
</template>
<script>
    import '../../styles/_init';
    import '../../styles/page';
    import './style';
    import PaLoading from 'pingan-ui/components/pop-loading';
    import PaPopBox from 'pingan-ui/components/pop-box';
    import DocStepLine from '../../business/ui-components/page-doc/step-line/index';
    import PaStepLine from 'pingan-ui/components/step-line/index';

    export default {
        components:{
            PaLoading,
            PaPopBox,
            DocStepLine,
            PaStepLine
        },
        computed: {
            loadingPopText() {
                return this.$store.state.loadingPopText; // loading弹框--文字
            },
            loadingPopDisabled() {
                return this.$store.state.loadingPopDisabled; // loading弹框--状态
            },
            popBoxButtons() {
                return this.$store.state.popBoxButtons; // 普通弹框--按钮
            },
            popBoxDisabled() {
                return this.$store.state.popBoxDisabled; // 普通弹框--状态
            },
            popBoxText(){
                return this.$store.state.popBoxText; // 普通弹框--文字
            },
            popBoxIcon(){
                return this.$store.state.popBoxIcon; // 普通弹框--图标
            }
        },
        methods: {
            popBoxFinish(Id) {
                if(Id !== "MASK_CLOSE") {
                    this.$store.state.popBoxDisabled = true;
                }
            }
        },
        data:function () {
            return {
                stepList1: [
                {
                    name: 'step1',
                    text: '选卡',
                    isActive: false
                },
                {
                    name: 'step2',
                    text: '开户协议',
                    isActive: false
                },
                {
                    name: 'step3',
                    text: '身份认证',
                    isActive: true
                },
                {
                    name: 'step4',
                    text: '开户信息',
                    isActive: false
                },
                {
                    name: 'step5',
                    text: '增值服务',
                    isActive: false
                },
                {
                    name: 'step6',
                    text: '插卡设密',
                    isActive: false
                },
                {
                    name: 'step7',
                    text: '视频认证',
                    isActive: false
                },
                {
                    name: 'step8',
                    text: '完成',
                    isActive: false
                }
            ]
            }
        }
    }
</script>
