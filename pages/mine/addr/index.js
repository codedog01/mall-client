const APP = getApp()
const imgUtil = require("../../../utils/imgUtil")
const API = require("../../../servers/api")
Page({

    data: {
        refresherTriggered: false,
        addressList: []
    },

    onLoad: function (options) {
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
                console.log(item)
                return {
                    name: item.userName.substr(0, 1),
                    userName: item.userName,
                    phone: item.phone,
                    detail: item.detail,
                    isDefault: item.isDefault,
                    province: item.province,
                    city: item.province,
                    counties: item.province
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