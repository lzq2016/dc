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
        posts_key: [],
        layerHeight: 0,
        foodDetailShow: 'none',
        foodDetailContent: {},
        currentStandard: 0,
        currentSize: 0
    },

    onLoad: function () {
        var that = this;
        that.setData({
            layerHeight: app.globalData.window.height,
            posts_key: postsData.postList
        })
    },
    menuTap: function (event) {
        var that = this;
        var dishid = event.currentTarget.dataset.dishid;
        postsData.postList.forEach(function (item) {
            if (item.dishid == dishid) {
                that.setData({
                    foodDetailShow: 'block',
                    foodDetailContent: item
                })
            }
        });
    },
    layer: function (e) {
        var that = this;
        if (that.data.foodDetailShow == "block") {
            that.setData({
                foodDetailShow: 'none'
            })
        }
    },
    layer1: function (e) {

    },
    standardTap: function (e) {
        var that = this;
        var code = e.currentTarget.dataset.code;
        that.setData({
            currentStandard: code
        })
    },
    sizeTap: function (e) {
        var that = this;
        var code = e.currentTarget.dataset.code;
        that.setData({
            currentSize: code
        })
    },
    addtocar: function (e) {
        var that = this;
        var dish = {};
        var dishlist = [];
        var dishid = e.currentTarget.dataset.dishid;
        postsData.postList.forEach(function (item) {
            if (item.dishid == dishid) {
                dish = item;
            }
        });

        try {
            var value = wx.getStorageSync('dishlist');
            var hasOrdered = false;
            if (value) {
                // dishlist = value;
                value.forEach(function (item) {
                    if (item.dishid == dishid) {
                        item.amount += 1;
                        hasOrdered = true;
                    }
                });
                !hasOrdered ? value.push(dish) : "";
                try {
                    wx.setStorageSync('dishlist', value);
                    wx.showToast({
                        title: '已加到菜篮中~',
                        icon: 'success',
                        image: '/images/eat.png',
                        duration: 2000
                    });
                } catch (e) {
                    console.log("存菜单失败");                    
                }
            }
            else{
                console.log("未获取到已点菜单");
                dishlist.push(dish);
                try {
                    wx.setStorageSync('dishlist', dishlist);
                    wx.showToast({
                        title: '已加到菜篮中~',
                        icon: 'success',
                        image: '/images/eat.png',
                        duration: 1000
                    });
                } catch (e) {
                    console.log("存菜单失败");
                }
            }
        } catch (e) {
            
        } 
    }
})
