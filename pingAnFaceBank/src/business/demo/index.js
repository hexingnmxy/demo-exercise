import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './common/router';
import CorePlugin from '../common/core';
import mockData from './common/mock';

window.mockData = mockData;

Vue.use(VueResource);
Vue.use(CorePlugin);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});
