//index.js
//获取应用实例
var postsData = require('../../data/posts-data.js')

const app = getApp()

Page({
  data: {
    indicatorDots: true,//是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    circular: true, //是否采用衔接滑动
    imgUrls: [
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg'
    ],
    posts_key: []
  },

  onLoad: function () {
    var that = this
    that.setData({
      posts_key: postsData.postList
    })
  },
  menuTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../Buy/Buy?id=' + postId
    })
  }
})
