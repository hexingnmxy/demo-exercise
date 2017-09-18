import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Register from '../components/register/register.vue'
import Contact from '../components/contact/contact.vue'
import Info from '../components/infomation/info.vue'
import Personal from '../components/personal/personal.vue'


Vue.use(Router);

const routes = [
	{ path: '/', redirect: { name: 'homeArea' } },
	{	
		path: '/home',
		name: 'homeArea',
		components: {
			"default":Home,
			"subPage":Register
		}
	},
	{
		path:'/contact',
		name:'contactArea',
		components:{
			"default":Contact
		}
	},
	{
		path:'/info',
		name:'infoArea',
		components:{
			"default":Info
		}
	},
	{
		path:'/personal',
		name:'personalArea',
		components:{
			"default":Personal
		}
	}
	]

export default new Router({
	linkActiveClass:'active',
	routes
})