const APP = getApp()
const imgUtil = require("../../../utils/imgUtil")
const API = require("../../../servers/api")
Page({

    data: {
        refresherTriggered: false,
        addressList: []
    },

    routingDetail(event){
        wx.navigateTo({
            url: "./addr_detail/index",
            success: function (res) {
                res.eventChannel.emit('addrData', {
                    'addrId': event.currentTarget.dataset.id,
                })
            }
        })
    },


    onShow() {
        this.init();
    },

    onPullDownRefresh() {
        this.init();
    },

    init() {
        API.selectAllAddr({
            openId: APP.globalData.user.openId
        }).then(res => {
            const data = res.data.map(item => {
                return {
                    name: item.userName.substr(0, 1),
                    id: item.id,
                    userName: item.userName,
                    phone: item.phone,
                    detail: item.detail,
                    isDefault: item.isDefault,
                    province: item.province,
                    city: item.city,
                    counties: item.counties
                }
            });
            this.setData({addressList: data})
        }).finally(() => {
                this.setData({
                    refresherTriggered: false
                })
            }
        )
    }
})