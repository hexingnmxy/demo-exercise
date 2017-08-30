import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Register from '../components/register/register.vue'

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
	}]

export default new Router({
	routes
})