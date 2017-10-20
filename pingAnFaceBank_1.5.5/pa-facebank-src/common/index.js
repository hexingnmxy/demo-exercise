import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';

import api from './modules/api'; // 公用的接口url 例如，密码验密时获取时间戳
import core from './modules/core'; // 提供与逻辑相关的公用方法
import axiosMethods from './modules/axios'; // 提供与http请求相关的公用方法
import ui from './modules/ui'; // 提供与ui相关的公用方法
import device from './modules/device'; // 提供与App相关的公用方法
import store from './modules/store'; // 公有变量
import Empty from './empty'; // 给业务中的路由加进去一个默认路径下(/)的页面组件

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuex);

window.Vue = Vue; // 包含了VueRouter、axios、VueAxios、Vuex插件的vue
window.Api = api; // 将用于保存所有接口url(公有的与某业务独有的)
window.Core = core; // 提供与逻辑相关的公用方法
window.Axios = axiosMethods; // 提供与http请求相关的公用方法
window.Ui = ui; // 提供与ui相关的公用方法
window.Device = device; // 提供与http请求相关的公用方法
window.Store = new Vuex.Store(store); // 保存当前业务用到的所有变量
window.Router = new VueRouter({
	routes: [{ path: '/', name: 'Empty', component: Empty }]
});
