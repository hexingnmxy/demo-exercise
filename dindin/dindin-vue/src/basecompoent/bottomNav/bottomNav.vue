<template>
  <div id='bottom-nav-wrapper'>
  	<router-link :to='{name:"homeArea"}' tag='div'>
  		<i class='fa fa-area-chart'></i>
  		<span>工作</span>
  	</router-link>
  	<router-link :to='{name:"contactArea"}' tag='div'>
  		<i class='fa fa-user-circle-o'></i>
  		<span>联系人</span>
  	</router-link>
  	<router-link :to='{name:"infoArea"}' tag='div'>
  		<i class='fa fa-commenting-o'></i>
  		<span>信息</span>
  	</router-link>
  	<router-link :to='{name:"personalArea"}' tag='div'>
  		<i class='fa fa-bars'></i>
  		<span>我的</span>
  	</router-link>
  </div>
</template>

<script>
 	export default {
 		name:'bottomNav',
 		data:function(){
 			return{

 			}
 		},
 	}
</script>

<style scoped lang="less" rel="stylesheet/less">
	@import '~assets/css/base.less';
	@import '~assets/css/_mixin.less';
	#bottom-nav-wrapper{
		position: fixed;
		bottom: 0;
		width:100%;
		height:4rem;
		background-color: white;
		box-shadow:  0 -2px 10px lightgray;
		display:flex;
		justify-content:space-between;
		>div{
			color:#524d4d;
			display:flex;
			flex-direction:column;
			align-items:center;
			justify-content:center;
			width:25%;
			>i{
				font-size:1.7rem;
				margin-bottom:0.3rem;
			}
			>span{
				font-size:1rem;
			}
		}
		.router-link-exact-active{
			color:@theme-color;
		}
	}
</style>