const APP = getApp()
const imgUtil = require("../../utils/imgUtil")
const API = require("../../servers/api")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList:[
            "./img/swiper/1.png",
            "./img/swiper/2.png",
            "./img/swiper/3.png",
            "./img/swiper/4.png"
        ],
        activeKey: 1,
        commodity: []
    },
    onShow() {
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