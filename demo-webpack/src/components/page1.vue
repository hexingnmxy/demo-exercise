<template>
	<div>
		<div>{{msg}}</div>
		<h1>{{num}}</h1>
	</div>
	
</template>

<script>
	import store from '../store/index'
	export default {
		data:function(){
			return {
				msg:'paga1111'
			}
		},
		computed:{
			num:function(){
				return store.state.count;
			}
		}
	}
</script>

<style scoped rel="stylesheet/stylus">
</style>