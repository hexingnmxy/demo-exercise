<template>
	<div ref="wrapper">
		<slot></slot>
	</div>

</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		props: {
			probeType: {
				type: Number,
				default: 1
			},
			click: {
				type: Boolean,
				default: true
			},
			listenScroll: {
				type: Boolean,
				default: false
			},
			data: {
				type: Array,
				default: null
			},
			pullup: {
				type: Boolean,
				default: false
			},
			beforeScroll: {
				type: Boolean,
				default: false
			},
			refreshDelay: {
				type: Number,
				default: 20
			}
		},
		mounted:function(){

		},
		methods:{
			_initScroll:function(){
				if (!this.$refs.wrapper) {
					return
				}
				this.scroll = new BScroll(this.$refs.wrapper,{
					probeType: this.probeType,
					click: this.click
				});
				if(this.listenScroll){
					let me = this
					this.scroll.on('scroll', (pos) => {
						me.$emit('scroll', pos)
					})
				}
			}
		},
		watch:{
			data:function(newval,oldval){
				this.$nextTick(function(){
					this._initScroll()
				})
			}
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>