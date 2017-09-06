<template>
	<div id='contact'>
		<scroll class='scroll-wrapper' 
		:data='moduleData'
		:listenScroll='true'
		:pullup='true'
		:probeType='3'
		@scroll='listenOnSroll'
		>
		<div class='scroll-inner-wrapper'><cart-wrapper v-for='item in moduleData' :listData='item'></cart-wrapper></div>
	</scroll>
</div>

</template>

<script>
	import cartWrapper from 'src/basecompoent/cartWrapper/cartWrapper.vue';
	import scroll from 'src/basecompoent/scroll/scroll.vue'
	export default {
		data:function(){
			return {
				moduleData:[]
			}
		},
		created:function(){
			this.getModuleData();
		},
		mounted:function(){
			
		},
		methods:{
			getModuleData:function(){
				this.$core.post(this.$API.moduledata,'',(res)=>{
					this.moduleData = res.modulepart;
				})
			},
			listenOnSroll:function(res){
				// console.log(res)
			}
		},
		components:{
			cartWrapper,
			scroll
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
	@import '~assets/css/base.less';
	@import '~assets/css/_mixin.less';
	#contact{
		position:relative;
		&:after{
			.clearfix();
		}
		.scroll-wrapper{
			position: fixed;
			top:0;
			left:0;
			right:0;
			bottom: 4rem;
		}
	}
</style>