<template>
    <div>
        <content-show :left-nav-list="leftNavList">
            <div class="content-document" ref="button">
                <doc-button></doc-button>
            </div>
            <div class="content-document" ref="sort">
                <doc-sort></doc-sort>
            </div>
            <div class="content-document" ref="radio">
                <doc-radio></doc-radio>
            </div>
            <div class="content-document" ref="radioButton">
                <doc-radio-button></doc-radio-button>
            </div>
            <div class="content-document" ref="radioTab">
                <doc-radio-tab></doc-radio-tab>
            </div>
            <div class="content-document" ref="switch">
                <doc-switch></doc-switch>
            </div>
            <div class="content-document" ref="checkbox">
                <doc-checkbox></doc-checkbox>
            </div>
            <div class="content-document" ref="checkboxButton">
                <doc-checkbox-button></doc-checkbox-button>
            </div>
            <div class="content-document" ref="rate">
                <doc-rate></doc-rate>
            </div>
            <div class="content-document" ref="input">
                <doc-input></doc-input>
            </div>
            <div class="content-document" ref="inputSearch">
                <doc-input-search></doc-input-search>
            </div>
            <div class="content-document" ref="textarea">
                <doc-textarea></doc-textarea>
            </div>
            <div class="content-document" ref="tabs">
                <doc-tabs></doc-tabs>
            </div>
            <div class="content-document" ref="stepLine">
                <doc-step-line></doc-step-line>
            </div>
            <div class="content-document" ref="sliderToggle">
                <doc-slider-toggle></doc-slider-toggle>
            </div>
            <div class="content-document" ref="dotItem">
                <doc-dot-item></doc-dot-item>
            </div>
            <div class="content-document" ref="imageShow">
                <doc-image-show></doc-image-show>
            </div>
            <div class="content-document" ref="twoLevelList">
                <doc-two-level-list></doc-two-level-list>
            </div>
            <div class="content-document" ref="loading">
                <doc-loading></doc-loading>
            </div>
            <div class="content-document" ref="pop">
                <doc-pop-box></doc-pop-box>
            </div>
            <div class="content-document" ref="mask">
                <doc-mask></doc-mask>
            </div>
            <div class="content-document" ref="popDataList">
                <doc-pop-data-list></doc-pop-data-list>
            </div>
            <div class="content-document" ref="linkage">
                <doc-linkage></doc-linkage>
            </div>
            <div class="content-document" ref="selectBox">
                <doc-select-box></doc-select-box>
            </div>
            <div class="content-document" ref="carousel">
                <doc-carousel></doc-carousel>
            </div>
        </content-show>
    </div>
</template>
<script>
    import store from '../common/store';
    import ContentShow from '../components/content-show/index';
    import DocButton from '../page-doc/button/index';
    import DocSort from '../page-doc/sort/index';
    import DocRadio from '../page-doc/radio/index';
    import DocRadioButton from '../page-doc/radio-button/index';
    import DocRadioTab from '../page-doc/radio-tab/index';
    import DocSwitch from '../page-doc/switch/index';
    import DocCheckbox from '../page-doc/checkbox/index';
    import DocCheckboxButton from '../page-doc/checkbox-button/index';
    import DocRate from '../page-doc/rate/index';
    import DocInput from '../page-doc/input/index';
    import DocInputSearch from '../page-doc/input-search/index';
    import DocTextarea from '../page-doc/textarea/index';
    import DocTabs from '../page-doc/tabs/index';
    import DocStepLine from '../page-doc/step-line/index';
    import DocSliderToggle from '../page-doc/slider-toggle/index';
    import DocDotItem from '../page-doc/dot-item/index';
    import DocImageShow from '../page-doc/image-show/index';
    import DocTwoLevelList from '../page-doc/two-level-list/index';
    import DocLoading from '../page-doc/loading/index';
    import DocPopBox from '../page-doc/pop-box/index';
    import DocMask from '../page-doc/mask/index';
    import DocPopDataList from '../page-doc/pop-data-list/index';
    import DocLinkage from '../page-doc/linkage/index';
    import DocSelectBox from '../page-doc/select-box/index';
    import DocCarousel from '../page-doc/carousel/index';
    export default {
        data(){
            return{
                leftNavList: store.state.leftNavComponents
            }
        },
        components:{
            ContentShow,
            DocButton,
            DocSort,
            DocRadio,
            DocRadioButton,
            DocRadioTab,
            DocSwitch,
            DocCheckbox,
            DocCheckboxButton,
            DocRate,
            DocInput,
            DocInputSearch,
            DocTextarea,
            DocTabs,
            DocStepLine,
            DocSliderToggle,
            DocDotItem,
            DocImageShow,
            DocTwoLevelList,
            DocLoading,
            DocPopBox,
            DocMask,
            DocPopDataList,
            DocLinkage,
            DocSelectBox,
            DocCarousel
        },
        methods:{
            showItemContent(item) {
                console.log(item);
                const domList = this.$parent.$refs;
                let navDom      = null;
                for( let key in domList ) {
                    if( key === item.key ) {
                        navDom = domList[key];
                        break;
                    }
                }
                if( !navDom ) {
                    return false;
                }
                document.body.scrollTop =  navDom.offsetTop;
                return true;
            }
        }
    }
</script>
