//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    
  },
  //事件处理函数
  test: function () {
    console.log("哈哈")
    wx.navigateTo({
      url: '../canvas/canvas'
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

