import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Page1 from '../components/page1.vue'
import Page2 from '../components/page2.vue'

Vue.use(Router)

export default new Router({
	routes:[
	{
		path:'/',name:'home',component:Home
	},
	{
		path:'/page1',name:'page1',component:Page1
	},
	{
		path:'/page2',name:'page2',component:Page2
	}

	]
})
