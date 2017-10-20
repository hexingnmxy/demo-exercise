<template>
    <div>
        <top-nav></top-nav>
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
//    import '../../styles/_init.less';
    import './styles/_init.less';
    import './styles/App';
    import TopNav from './components/top-nav/index';
    export default {
        components:{
            TopNav
        }
    }
</script>
