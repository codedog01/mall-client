
App({
  onLaunch(e) {
    let user = this.globalData.user
    const that = this
      wx.login({
        success: function (res) {
          wx.showLoading({
            title: 'logining',
          })
          wx.request({
            method: "GET",
            url:'http://localhost:8080/api/user/login', 
            data: {
              code: res.code
            },
            success: function (res) {
              that.globalData.user = res.data.data;
              if (that.checkCallback) {
              that.checkCallback(user);
              }
              wx.showToast({
                title: 'login success',
              })
            },
            fail:function(){
              wx.showToast({
                title: 'login failure',
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