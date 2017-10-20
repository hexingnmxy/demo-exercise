<template>
  <div>
    <content-show :left-nav-list="leftNavList">
      <div class="content-document" ref="color">
        <components-color></components-color>
      </div>
      <div class="content-document" ref="font">
        <components-font></components-font>
      </div>
      <div class="content-document" ref="icon">
        <components-icon></components-icon>
      </div>
    </content-show>
  </div>
</template>
<script>
  import store from '../common/store';
  import ContentShow       from '../components/content-show/index';
  import ComponentsColor   from '../page-doc/components-color/index';
  import ComponentsFont    from '../page-doc/components-font/index';
  import ComponentsIcon    from '../page-doc/components-icon/index';
  export default {
    data(){
        return{
            leftNavList: store.state.leftNav
        }
    },
    components:{
        ContentShow,
        ComponentsColor,
        ComponentsFont,
        ComponentsIcon
    },
    methods:{
        showItemContent(item) {
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
