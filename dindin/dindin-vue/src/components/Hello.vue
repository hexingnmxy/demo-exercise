<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img :src="src" style="width:100%;height:auto">
    <h2 @click='plusCamera'>打开摄像头</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js 1111',
      src:''
    }
  },
  mounted:function(){
  
  },
  methods:{
    plusCamera:function(){
      var _this = this;
        var cmr = plus.camera.getCamera();
        cmr.captureImage(function(p){
          // outLine('成功：'+p);
          // var src='file:///storage/emulated/0/Android/data/io.dcloud.HBuilder/.HBuilder/apps/HBuilder/';
          // console.log(p);
          plus.io.resolveLocalFileSystemURL(p, function(entry){
            // createItem(entry);
            console.log(entry);
            _this.src = 'file:///'+entry.fullPath;
            
          }, function(e){
            // outLine('读取拍照文件错误：'+e.message);
          });
        }, function(e){
          // outLine('失败：'+e.message);
        }, {filename:'_doc/camera/',index:1});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
