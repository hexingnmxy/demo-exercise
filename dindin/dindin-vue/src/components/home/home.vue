<template>
	<div id="home">
		<base-group :message="bellNo" class='page-header'>
		<span class='user-name'>狗二的力量</span>
		<span class='icon-area'>
			<span class='bell-icon'><i class='fa fa-bell-o'></i><sup><badge :text="bellNo"></badge></sup></span>
			<span class='search-icon'> <i class='fa fa-search'></i></span>
		</span>
	</base-group>
	<div class='body-wrapper'>
		<div v-show='homePageData.length' class="swiper-container silde-area">
			<div class="swiper-wrapper">
				<div v-for='item in homePageData' class="swiper-slide">
					<img @load="loadImage" class='slide-img' :src="item.qusetionIcon" alt="">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class='module-part-wrapper'>
			<cart-wrapper v-for='item in moduleData' :listData='item'></cart-wrapper>
		</div>
	</div>
</div>
</template>

<script>
	import {Group, Badge } from 'vux';
	import baseGroup from 'src/basecompoent/group/group.vue';
	import cartWrapper from 'src/basecompoent/cartWrapper/cartWrapper.vue';
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

	export default {
		data:function(){
			return{
				bellNo:9,
				homePageData:[],
				moduleData:[],//功能列表数据
				imgLoaded:false //轮播图图片是否加载完成;
			}
		},
		computed:{
			x:function(){
				return this.bellNo;
			},
			...mapState({
				count: state => state.x,
				countPlusLocalState (state) {
					return state.x + this.bellNo
				}
			}),
			...mapGetters([
				'doneTodos'
				])
		},
		created:function(){
			this.getHomeData();
			this.getModuleData();
		},
		mounted:function(){
			this.$nextTick(function(){
				this.$core.setStyle({scrollIndicator:'none'});
			})

		},
		methods:{
			...mapMutations([
				'increment'
				]),
			...mapActions({
				add: 'incrementx'
			}),
			getHomeData:function(){
				this.$core.post(this.$API.Homepage,'',(res)=>{
					this.homePageData = res.Homepage;
				})
			},
			initSlideImg:function() {
				this.myHomeSwiper = new Swiper ('.silde-area', {
					direction: 'horizontal',
					loop: true,
					autoplay : 13000,
					speed:500,
					autoplayDisableOnInteraction : false,
					pagination: '.swiper-pagination'
				})   
			},
			getModuleData:function(){
				this.$core.post(this.$API.moduledata,'',(res)=>{
					this.moduleData = res.modulepart;
				})
			},
			loadImage:function(){
				if(!this.imgLoaded){
					this.imgLoaded = true;
				}
			}
		},
		components: {
			cartWrapper,
			Badge,
			baseGroup

		},
		watch: {
			homePageData:function() {
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
		@media (max-width: 1600px) {
            background-color: red;
            
        }
		.page-header{
			display: flex;
			align-items:center;
			justify-content:space-between;
			// padding:0 1rem;
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
			height:200px;
			.slide-img{
				width:100%;
				height:200px;
			}
		}
		.module-part-wrapper{
			margin:1rem 0rem;
			border-top:1px solid lightgray;
			border-bottom: 1px solid lightgray;
			background-color:white;
		}
	}
</style>