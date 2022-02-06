const APP = getApp()
const imgUtil = require("../../../utils/imgUtil")
const API = require("../../../servers/api")
Page({

    data: {
        refresherTriggered: false,
        totalPrice: 0,
    },

    onPullDownRefresh() {
        API.getFinished({
            openId: APP.globalData.user.openId,
        }).then(res => {
            this.setData({
                goods: res.data
            })
        }).finally(() => {
                this.setData({
                    refresherTriggered: false
                })
            }
        )
    },

    DelDeal(e) {
        wx.showModal({
            title: '亲',
            content: '确定要删除此次交易记录吗？',
            cancelText: '点错了',
            confirmText: '再见',
            success: res => {
                if (res.confirm) {

                    API.delDeal({
                        goodsId: e.currentTarget.dataset.likes_id,
                        openId: APP.globalData.user.openId,
                    }).then(()=>{
                        let goods = this.data.goods;
                        goods.splice(e.currentTarget.dataset.index, 1)
                        this.setData({goods: goods})
                    })
                }
            }
        })
    },

    onLoad: function (options) {
        API.getFinished({
            openId: APP.globalData.user.openId,
        }).then(res => {
            this.setData({
                goods: res.data
            })
        })
    },


})