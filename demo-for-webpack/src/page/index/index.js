import _mm from 'util/mm.js';
// var _mm = require('util/mm.js');
// var slider = require('util/slider/index.js');
import './index.less';
const tools = require('jquery');
console.log(tools('body')[0]);
var tplSlider  = require('./tplSlider.string');

var dataSlider = [
	{name:'one',image_name:'../../img/banner1.jpg'},
	{name:'two',image_name:'../../img/banner3.jpg'},
	{name:'three',image_name:'../../img/banner5.jpg'}
];


window.onload = function(){
	var sliderDom = _mm.renderHtml(tplSlider,dataSlider);
	document.querySelector('.swiper-wrapper').innerHTML = sliderDom;
}


// var mySwiper = new Swiper('.swiper-container', {
// 				autoplay: 3000, //可选选项，自动滑动
// 				loop: true,
// 				pagination: '.swiper-pagination',
// 				paginationClickable: true,
// 				autoplayDisableOnInteraction: false
// 			});




