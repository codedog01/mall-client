// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarImage:'游客B627',
    nickName:'游客B627'
  },
  navigateTo(event) {
    wx.navigateTo({
        url: event.currentTarget.dataset.url,

    })
},
})