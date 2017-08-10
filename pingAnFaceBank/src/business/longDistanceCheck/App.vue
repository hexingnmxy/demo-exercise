<template>
    <div>
      <pa-loading :text="loadingPopText" :disabled="loadingPopDisabled"></pa-loading>
        <pa-pop-box :buttons="popBoxButtons" :disabled="popBoxDisabled" :finish="popBoxFinish">
            <div v-if="popBoxIcon" :class="['pop-icon', popBoxIcon]"></div>
            {{popBoxText}}
        </pa-pop-box>
      <router-view></router-view>
    </div>
</template>
<script>
    import '../../styles/_init';
    import '../../styles/page';
    import './style';
    import PaLoading from 'pingan-ui/components/pop-loading';
    import PaPopBox from 'pingan-ui/components/pop-box';

    export default {
        components:{
            PaLoading,
            PaPopBox
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
        }
    }
</script>
