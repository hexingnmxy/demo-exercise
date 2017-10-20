<template>
    <div>
        <div class="page-wrapper">
            <pa-loading :text="loadingPopText" :disabled="loadingPopDisabled"></pa-loading>
            <pa-pop-box :buttons="popBoxButtons" :disabled="popBoxDisabled" :finish="popBoxFinish">
                <div v-if="popBoxIcon" :class="['pop-icon', popBoxIcon]"></div>
                {{popBoxText}}
            </pa-pop-box>
            <div class="title-position">
                <pa-return :bussiness-name="bussinessName" :onShowNavigator="showNavigator"></pa-return>
            </div>
            <pa-navigator
                v-model="sliderToggleShow"
                :stepList="stepList"
                :userName="tellerUserName"
                :navigatorTitle="bussinessName"
                :onClose="closeMenuList"
            ></pa-navigator>
            <router-view></router-view>
            <pa-mask type="black"  :disabled="maskDisabled" @click.native="onClickMask"></pa-mask>
        </div>
    </div>
</template>
<script>
    import '../styles/_init'; // 初始化基本样式
    import '../styles/page'; // 当前页面的样式
    import PaReturn from '../components/return/index'; // 顶部标题栏
    import PaNavigator from '../components/navigator/index'; // 右侧导航栏
    import PaLoading from 'pa-ui/components/pop-loading'; // 加载框
    import PaPopBox from 'pa-ui/components/pop-box'; // 弹出框
    import PaMask from 'pa-ui/components/mask'; // 遮罩层

    export default {
        data(){
            Store.state.Teller = Device.getLogin(); // 从设备获取柜员信息,并保存到业务的变量容器中
            return{
                bussinessName: Store.state.return.name, // 从父组件获取业务名称,并给"头部导航栏"和"右侧导航栏"赋值
                sliderToggleShow: false, // 默认不显示"右侧导航栏"
                stepList: Store.state.navigator.stepList, // 给右侧导航栏赋初始值
                tellerUserName: Store.state.Teller.userName // 给右侧导航栏中"柜员姓名"赋值
            }
        },
        components:{
            PaLoading,
            PaPopBox,
            PaReturn,
            PaNavigator,
            PaMask
        },
        computed: {
            loadingPopText() {
                return Store.state.loadingPopText; // loading弹框--文字
            },
            loadingPopDisabled() {
                return Store.state.loadingPopDisabled; // loading弹框--状态
            },
            popBoxButtons() {
                return Store.state.popBoxButtons; // 普通弹框--按钮
            },
            popBoxDisabled() {
                return Store.state.popBoxDisabled; // 普通弹框--状态
            },
            popBoxText(){
                return Store.state.popBoxText; // 普通弹框--文字
            },
            popBoxIcon(){
                return Store.state.popBoxIcon; // 普通弹框--图标
            },
            maskDisabled() {
                return Store.state.maskDisabled; // 遮罩--默认隐藏
            }
        },
        methods: {
            // popBox弹框中 按钮点击事件
            popBoxFinish(btnOption) {
                if(typeof btnOption.callback === "function") {
                    btnOption.callback();
                }
                Ui.popBox(false);
            },
            // 关闭"右侧菜单栏"
            closeMenuList() {
                this.sliderToggleShow = false;
            },
            // 显示"菜单列表"
            showNavigator() {
                this.sliderToggleShow = true;
            },
            // 点击"遮罩层"时
            onClickMask() {
                Store.state.maskDisabled = true; // 隐藏"遮罩层"
                // 隐藏"右侧导航栏"
                if(this.sliderToggleShow) {
                    this.sliderToggleShow = false;
                }
            }
        },
        props:{
            navigator:{} // 右侧导航数据
        }
    }
</script>
