<template>
  <div>
    <p><button @click="plus">加1</button></p>
    <p><button @click="getData">请求真实接口</button></p>
    <p><button @click="getDataMock">请求模拟接口</button></p>
    <p><button @click="commonMethod">公有方法</button></p>
    <h1>{{ msg }}</h1>
    <h1>{{ num }}</h1>
    <div style="height: 20px;width: 500px;position: relative;border: 1px solid gray">
      <transition name="test-show">
        <div v-show="isShowDiv" class="mount">风林山火</div>
      </transition>
    </div>
    <p><button @click="testAnimation">测试动画</button></p>
  </div>
</template>
<script>
import './home.less';
import store from '../common/store';
export default {
  data () {
    return {
      msg: 'Welcome！',
      isShowDiv: false
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
    },
    testAnimation() {
//        this.isShowDiv = true;
        if(this.isShowDiv){
            this.isShowDiv = false;
        }else {
            this.isShowDiv = true;
        }
    }
  }
}
</script>
