//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgalist: [
    '../../img/music/music01.png', 
    '../../img/music/music02.png', 
    '../../img/music/music03.png', 
    '../../img/music/music04.png', 
    '../../img/music/music05.png', 
    ],
    weApp:[
      '../../img/wxapp/01.png',
      '../../img/wxapp/02.png',
      '../../img/wxapp/03.png',
      '../../img/wxapp/04.png',
      '../../img/wxapp/05.png'
    ]
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    console.log(current);
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgalist // 需要预览的图片http链接列表  
    })
  },
  weApp:function(e){
    var current = e.target.dataset.src;
    console.log(current);
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.weApp // 需要预览的图片http链接列表  
    })
  }  
})
