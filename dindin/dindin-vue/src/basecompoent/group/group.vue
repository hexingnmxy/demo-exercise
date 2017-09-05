<template>
  <div class='base-group-wrapper'>
  	<slot></slot>
  </div>
</template>

<script>
export default{
	name:'group',
	props:{
		// message:{
		// 	type:Number,
		// 	require:false
		// }
	},
	data:function(){
		return {

		}
	}
}
 
</script>

<style scoped lang="less" rel="stylesheet/less">
	.base-group-wrapper{
		padding:0 1rem;
		display:block;
		// height:4rem;
	}
</style>