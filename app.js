//app.js
App({
  onLaunch: function () {
    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        self.globalData.window = {
          width: res.windowWidth,
          height: res.windowHeight
        };
      }
    })
  },
  globalData: {
    userInfo: null,
    window:{
      width:0,
      height:0
    }
  }
})