<template>
	<div id="home">
		<div class='header'>
			<span class='user-name'>狗二的力量</span>
			<span class='icon-area'>
				<span class='bell-icon'><i class='fa fa-bell-o'></i><sup><badge :text="bellNo"></badge></sup></span>
				<span class='search-icon'> <i class='fa fa-search'></i></span>
			</span>

		</div>
	</div>
</template>

<script>
	import { Badge } from 'vux';
	export default {
		data:function(){
			return{
				bellNo:8
			}
		},
		created:function(){
		},
		mounted:function(){
			console.log($)
		},
		components: {
			Badge,
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import '~assets/css/base.less';
@import '~assets/css/_mixin.less';
#home{
	.header{
		display: flex;
		align-items:center;
		justify-content:space-between;
		height: 4rem;
		padding:0 1rem;
		background-color: @background-color;
		.user-name{
			font-weight:700;
			letter-spacing:1px;
			font-size:1.4rem;
			color:#777575;
		}
		.icon-area{
			color:@theme-color;
			display:flex;
			align-items:center;
			justify-content:space-between;
			.bell-icon,.search-icon{
				display:block;
				width:2rem;
				height:2rem;
				position:relative;
				margin-left:0.8rem;
				>i{
					font-size:1.5rem;
					.centerCSS();
					z-index:2;
				}
				>sup{
					position:absolute;
					top:-3px;
					right:-0.3rem;
					z-index:1;
				}
			}
		}
	}
}
</style>