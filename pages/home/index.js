const APP = getApp()
const imgUtil = require("../../utils/imgUtil")
const API = require("../../servers/api")
Page({

    /**
     * 页面的初始数据
     */
    data: {

        activeKey: 1,
        commodity: []
    },
    onLoad() {
        let data = {
            commodity: this.data.commodity,
        }
        API.selectGoods().then(res => {
            data.commodity = res.data
            this.setData(data)
        })
    },

    ChangeBar(e) {
        this.setData({
            activeKey: e.currentTarget.dataset.index
        })

    },

    goodsNavigateTo(event) {
        wx.navigateTo({
            url: "./goods_detail/index",
            success: function (res) {
                res.eventChannel.emit('goodsData', {
                    'goodsId': event.currentTarget.dataset.goods_id,
                })
            }
        })
    },
})