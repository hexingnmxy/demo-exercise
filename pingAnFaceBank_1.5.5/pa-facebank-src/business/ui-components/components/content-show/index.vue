<template>
    <div>
        <left-nav :nav-trunk-list="leftNavList" @nav-click="test"></left-nav>
        <div class="right-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import './style'
    import LeftNav                from '../left-nav/index';

    export default {
        mounted() {
            window.addEventListener('scroll', this.scroll, false);
        },
        data() {
            return {
                navActive : this.leftNavList[0].navBranchList[0] || {}
            };
        },
        components : {
            LeftNav
        },
        methods: {
            test( item ) {
                const domList = this.$parent.$refs;
                let navDom = null;
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
            },
            scroll(e) {
                const domList = this.$parent.$refs;

                for (let key in domList ) {
                    if( !domList[key] ) {
                        return false;
                    }
                    if(
                            domList[key].offsetTop +
                            domList[key].clientHeight -
                            window.scrollY > 150
                    ) {
                        for( let i = 0; this.leftNavList[i]; i++ ) {
                            for( let j = 0; this.leftNavList[i].navBranchList[j]; j++ ) {
                                if( this.leftNavList[i].navBranchList[j].key === key ) {
                                    this.navActive.active           = false;
                                    this.leftNavList[i].navBranchList[j].active = true;
                                    this.navActive                  = this.leftNavList[i].navBranchList[j];
                                }
                            }
                        }
                        return false;
                    }
                }
                return false;
            }
        },
        props: {
            leftNavList : {
                type: Array,
                default() {
                    return [];
                }
            }
        }
    };
</script>
