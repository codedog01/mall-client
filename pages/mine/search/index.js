const imgUtil = require("../../../utils/imgUtil")
const APP = getApp()
const API = require("../../../servers/api")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    content: "",
  },

  onReady() {
    this.toast = this.selectComponent("#toast");
  },
  toastClick(flag, mes, timeout) {
    this.toast.setShow(flag ? "success" : "error", mes, timeout);
  },

  Publish() {
    if (this.data.content === "") {
      this.toastClick(false, "说点什么吧~")
      return;
    }

    API.addDynamic({
      openId: APP.globalData.user.openId,
      avatar: APP.globalData.user.avatar,
      name: this.data.name,
      content: this.data.content,
    }).then(() => {
      this.toastClick(true, "发布成功~")
      let sleep = (time) => new Promise((resolve) => {
        setTimeout(resolve, time)
      })
      sleep(2000).then(() => {
        wx.switchTab({
          url: "../../search/index"
        })
      });
    }).catch(() => {
      this.toastClick(false, "发布失败~")
    })
  },
  textareaInput(e) {
    this.setData({
      content: e.detail.value
    })
  },

})