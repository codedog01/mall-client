App({
  onLaunch(e) {
    let user = this.globalData.user
    const that = this
    wx.login({
      success: function (res) {
        const code = res.code
        wx.showLoading({
          title: 'logining',
        })
        wx.getUserInfo({
          success: function (res) {
            var userInfo = res.userInfo
            wx.request({
              method: "POST",
              url: API.domain+'user/login',
              data: {
                code: code,
                nickName: userInfo.nickName,
                avatar: userInfo.avatarUrl
              },
              success: function (res) {
                if (res.data.success) {
                  wx.setStorageSync('openId', res.data.data.openId)
                  that.globalData.user = res.data.data;
                  if (that.checkCallback) {
                    that.checkCallback(user);
                  }
                  wx.showToast({
                    title: 'login success',
                  })
                } else {
                  wx.showToast({
                    title: 'login failure',
                  })
                }


              },
              fail: function () {
                wx.showToast({
                  title: 'login failure',
                })
              }
            })
          }
        })

      },
    })


  },

  globalData: {
    user: {}
  }
})