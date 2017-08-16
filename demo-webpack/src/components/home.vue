<template>
	<div>
  <div>{{msg}}</div>
  <p><button @click='plus'>加1</button></p>
  <p><button @click='getData'>加载数据</button></p>
  <p><button @click='publicMethods'>公共方法</button></p>
  <h1>{{num}}</h1>
  </div>
</template>

<script>
import store from '../common/store'
import path from 'path'
 export default {
 	data:function(){
 		return {
 			msg:'111hello world111'
 		}
 	},
 	computed:{
 		num:function(){
 			return store.state.count;
 		}
 	},
 	methods:{
 		plus:function(){
 			store.commit('increment')
 		},
 		getData:function(){
 			// var url =path.resolve(__dirname, '../src/assets/data.json');
 			// console.log(url);
 			// this.$http.get(url).then((result)=>{
 			// 	console.log(result)
 			// })
 			// 
 			let params = {};
 			this.$core.get('../assets/data.json',params,true).then((result)=>{
 				console.log(result)
 			},(error)=>{
 				console.log(error)
 			})
 		},
 		publicMethods:function(){
 			console.log(this.$core.getName())
 		}
 	}
 }
</script>

<style scoped rel="stylesheet/stylus">
</style>