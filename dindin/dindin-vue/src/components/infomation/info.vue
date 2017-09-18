<template>
	<ul id='info'>
		<msg-item></msg-item>
	</ul>
  
</template>

<script>
import msgItem from 'src/basecompoent/msgItem/msgItem.vue'
 export default{
 	components:{
 		msgItem
 	},
 	data:function(){
 		return {
 			
 		}
 	}
 }
</script>

<style scoped lang="less" rel="stylesheet/less">
	@import '~assets/css/base.less';
	@import '~assets/css/_mixin.less';

</style>