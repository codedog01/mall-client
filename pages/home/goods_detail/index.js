const APP = getApp()
const API = require("../../../servers/api")
Page({
    data: {},
    toastClick(flag, mes, timeout) {
        this.toast.setShow(flag ? "success" : "error", mes, timeout);
    },
    AddLike() {
        API.addLike({
            goodsId: this.data.goods.id,
            openId: APP.globalData.user.openId
        }).then(() => {
            this.toastClick(true, "成功加入购物车~")
        }).catch(() => {
            this.toastClick(false, "加入购物车失败~")
        })

    },
    onLoad: function (options) {
    this.toast = this.selectComponent("#toast");
        const _this = this
        const eventChannel = this.getOpenerEventChannel();
        // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
        eventChannel.on('goodsData', (resData) => {
            API.selectOne({goodsId: resData.goodsId}).then(res => {
                _this.setData({
                    goods: res.data
                })
            })
        })
    },

})