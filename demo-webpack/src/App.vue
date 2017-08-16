<template>
  <div id='appvue'>
  <router-link to='/'>首页</router-link>				
  <router-link to='page1'>跳转page1</router-link>				
  <router-link to='page2'>跳转page2</router-link>
  <router-view></router-view>
  </div>				
</template>

<script>
 export default{
 	
 }
</script>

<style scoped rel="stylesheet/stylus">
	#appvue{
		div{
			color:blue;
			*{
				text-decoration: none
			}
		}
	}
</style>