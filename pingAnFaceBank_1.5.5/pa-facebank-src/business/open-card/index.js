import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './common/router';
import CorePlugin from './common/core';
import mockData from './common/mock';

window.mockData = mockData;

Vue.use(VueAxios, axios);
Vue.use(CorePlugin);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});
