<template>
    <div>
      <top-nav></top-nav>
      <router-view></router-view>
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
