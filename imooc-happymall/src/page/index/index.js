var $ = require('jquery');
require('./index.css');
require('node_modules/font-awesome/css/font-awesome.css');
require('page/common/silder/index.js');
var navSide = require('page/common/nav-side/index');
var tpl = require('./banner.string')
var _mm = require('util/mm.js');

var htmlTpl = "hello: <%= name %>";
var data = {name :'moe'};
navSide.init()
$(function(){
    var bannerHtml = _mm.renderHtml(tpl);
    console.log(bannerHtml);
    $('.banner-container').html(bannerHtml);
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true
    })
})



