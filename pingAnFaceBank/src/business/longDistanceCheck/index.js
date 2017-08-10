import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import CorePlugin from '../common/core'; // 公用方法
import DevicePlugin from '../common/device'; // ios/安卓 方法
import router from './common/router';
import mockData from './common/mock';
import store from './common/store';

window.mockData = mockData;

Vue.use(VueAxios, axios);
Vue.use(CorePlugin);
Vue.use(DevicePlugin);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {App}
});
