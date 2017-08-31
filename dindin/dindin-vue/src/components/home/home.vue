<template>
	<div id="home">
		<div class='header'>
			<span class='user-name'>狗二的力量</span>
			<span class='icon-area'>
				<span class='bell-icon'><i class='fa fa-bell-o'></i><sup><badge :text="bellNo"></badge></sup></span>
				<span class='search-icon'> <i class='fa fa-search'></i></span>
			</span>
		</div>
		<div v-show='homePageData.length' class="swiper-container silde-area">
			<div class="swiper-wrapper">
				<div v-for='item in homePageData' class="swiper-slide">
					<img @load="loadImage" class='slide-img' :src="item.qusetionIcon" alt="">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import { Badge } from 'vux';

	export default {
		data:function(){
			return{
				bellNo:8,
				homePageData:[],
				imgLoaded:false //轮播图图片是否加载完成;
			}
		},
		created:function(){
			this.getHomeData();
		},
		mounted:function(){
			
		},
		methods:{
			getHomeData:function(){
				this.$core.post(this.$API.Homepage,'',(res)=>{
					this.homePageData = res.Homepage;
				})
			},
			initSlideImg:function() {
				this.myHomeSwiper = new Swiper ('.silde-area', {
					direction: 'horizontal',
					loop: true,
					autoplay : 3000,
					speed:500,
					autoplayDisableOnInteraction : false,
				    pagination: '.swiper-pagination'
				})   
			},
			loadImage:function(){
				if(!this.imgLoaded){
					this.imgLoaded = true;
					// console.log(this.myHomeSwiper);
				}
			}
		},
		components: {
			Badge,
		},
		watch: {
		    homePageData:function() {
		        // setTimeout(() => {
		        //   this.initSlideImg()
		        // }, 20)
		        this.$nextTick(function(){
		        	this.initSlideImg()
		        })
		      }
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
		.silde-area{
			.slide-img{
				width:100%;
				height:200px;
			}
		}
	}
</style>