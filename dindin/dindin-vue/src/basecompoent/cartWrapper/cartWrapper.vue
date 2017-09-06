<template>
	<div class='base-cart-wrapper'>
		<base-group class='header'>
		<div class='module-name'>{{listData.modulepartname}}</div>
		<div class='wrapper-button' v-show='listData.moduledetail.length>4' @click='wrapperModule(listData.moduledetail)' v-text='isWrappered?"展开":"收起"'></div>
	</base-group>
	<div class='module-part-wrapper'>
		<div v-show="!item.isNonShow" @click='skipIntoModule(listData)' class='module-detail' v-for='(item,index) in listData.moduledetail'>
			<img :src="item.moduledetailicon" alt="">
			<span>{{item.moduledetailname}}</span>
		</div>
	</div>
</div>
</template>

<script>
	import baseGroup from 'src/basecompoent/group/group.vue';

	export default {
		name:'cartWrapper',
		data:function(){
			return {
				isWrappered:false
			}
		},
		props:{
			listData:{
				type:Object,
				require:true
			}
		},
		mounted:function(){

		},
		created:function(){

		},
		methods:{
			skipIntoModule:function(res){

			},
			wrapperModule:function(res){
				this.isWrappered = !this.isWrappered;
				if(this.isWrappered){
					for(let i=0;i<res.length;i++){
						if(i>=4){
							this.$set(res[i],'isNonShow',true)
						}
					}
				}else{
					for(let i=0;i<res.length;i++){
						if(i>=4){
							this.$set(res[i],'isNonShow',false)
						}
					}
				}
			}
		},
		watch:{
			listData:function(newval,oldval){
			}
		},
		components:{
			baseGroup
		}

	}

</script>

<style scoped lang="less" rel="stylesheet/less">
	@import '~assets/css/base.less';
	@import '~assets/css/_mixin.less';
	.base-cart-wrapper{
		// padding-top:1rem;
		.header{
			display:flex;
			justify-content:space-between;
			padding-top:0.8rem;
			padding-bottom: 0.8rem;
			.module-name{
				font-size:1.3rem;
				color:@font-color;
				font-weight:bold;
			}
			.wrapper-button{
				font-size:1.1rem;
				color:@font-color;
				opacity: 0.5;
			}
		}
		.module-part-wrapper{
			display:flex;
			width:100%;
			flex-wrap:wrap;
			.module-detail{
				width:25%;
				display:flex;
				justify-content:center;
				align-items:center;
				flex-direction:column;
				margin-bottom:1rem;
				>img{
					border-radius: 3px;
					margin-bottom: 0.5rem;
					width:4rem;
					height:4rem;
				}
			}
		}
	}

</style>