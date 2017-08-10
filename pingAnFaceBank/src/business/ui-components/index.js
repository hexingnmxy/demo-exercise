import Vue from 'vue';
import App from './App';
import router from './common/router';
import CorePlugin from './common/core';
import mockData from './common/mock';

window.mockData = mockData;

Vue.use(CorePlugin);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});
