<template>
  <div>
    <p><button @click="plus">加1</button></p>
    <p><button @click="getData">请求真实接口</button></p>
    <p><button @click="getDataMock">请求模拟接口</button></p>
    <p><button @click="commonMethod">公有方法</button></p>
    <h1>{{ msg }}</h1>
    <h1>{{ num }}</h1>
  </div>
</template>
<script>
import store from '../common/store';
export default {
  data () {
    return {
      msg: 'Welcome！'
    }
  },
  computed:{
    num() { return store.state.count;}
  },
  methods:{
    plus(){
      store.commit('increment');
    },
    // 请求真实接口
    getData(){
      let params = {};
      this.$core.get('http://api.map.baidu.com/geoconv/v1/?',params).then((result)=>{
          alert(JSON.stringify(result.body));
      }, (error)=>{
          alert(JSON.stringify(error));
      });
    },
    // 请求模拟接口
    getDataMock() {
      let params = {};
      this.$core.get('http://api.map.baidu.com/geoconv/v1/?',params, true).then((result)=>{
          alert(JSON.stringify(result.body));
      }, (error)=>{
          alert(JSON.stringify(error));
      });
    },
    commonMethod() {
      console.log(this.$core.getName());
    }
  }
}
</script>
