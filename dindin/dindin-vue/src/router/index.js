import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'

Vue.use(Router);

const routes = [
	{ path: '/', redirect: { name: 'Home' } },
	{
		path: '/home',
		name: 'Home',
		component: Home
	}]

export default new Router({
	routes
})