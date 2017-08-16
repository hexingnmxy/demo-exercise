import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './common/router'
import CorePlugin from './common/core'

Vue.use(VueResource);
Vue.use(CorePlugin);
new Vue({
	el:'#app',
	router,
	template:'<App/>',
	components:{App}
})