<template>
    <div>
        <content-show :left-nav-list="leftNavList">
            <div class="content-document" ref="return">
                <doc-return></doc-return>
            </div>
            <div class="content-document" ref="pageResult">
              <page-result></page-result>
            </div>
            <div class="content-document" ref="navigator">
              <navigator></navigator>
            </div>
            <div class="content-document" ref="swipeCard">
              <swipe-card></swipe-card>
            </div>
            <div class="content-document" ref="takePhotos">
              <take-photos></take-photos>
            </div>
            <div class="content-document" ref="readVideo">
              <read-video></read-video>
            </div>
        </content-show>
    </div>
</template>

<script>
    import store from '../common/store';
    import ContentShow from '../components/content-show/index';
    import PageResult from '../page-doc/page-page-result';
    import Navigator from '../page-doc/fb-navigator';
    import SwipeCard from '../page-doc/page-swipe-card';
    import TakePhotos from '../page-doc/page-take-photos';
    import DocReturn from '../page-doc/fb-return/index';
    import ReadVideo from '../page-doc/page-read-video';

    export default {
        data(){
            return{
                leftNavList: store.state.leftNavComponentsFb
            }
        },
        components:{
            ContentShow,
            DocReturn,
            PageResult,
            Navigator,
            SwipeCard,
            TakePhotos,
            ReadVideo
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
