// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import fastclick from 'fastclick'
import axios from 'axios'
import fontAwesome from '../node_modules/font-awesome/css/font-awesome.css'
import Swiper from 'assets/lib/swiper/swiper.js'
import $ from 'jquery'
import swal from 'sweetalert2'
// import VueTouch from 'vue-touch'
var VueTouch = require('../node_modules/vue-touch/dist/vue-touch.js')


Vue.use(VueTouch, {name: 'v-touch'})

//fastclick取消延迟300秒
if('addEventListener' in document){
	document.addEventListener('DOMContentLoaded',function(){
		// fastclick.attach(document.body)
	},false)
}

//公共css样式
import './assets/css/reset.css';
import './assets/lib/swiper/swiper.css';
import '../node_modules/sweetalert2/dist/sweetalert2.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
