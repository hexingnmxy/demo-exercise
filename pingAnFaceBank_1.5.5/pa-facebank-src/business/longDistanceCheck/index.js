import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import CorePlugin from '../common/core'; // 公用方法
import DevicePlugin from '../common/device'; // ios/安卓 方法
import router from './common/router';
import commonMockData from '../common/mock'; // 公用的模拟数据
import bussinessMockData from './common/mock'; // 具体业务的模拟数据
import store from './common/store';

window.commonMockData = commonMockData;
window.bussinessMockData = bussinessMockData;

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
