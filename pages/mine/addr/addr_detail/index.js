const APP = getApp()
const imgUtil = require("../../../../utils/imgUtil")
const API = require("../../../../servers/api")
Page({

    data: {
        userName: "",
        phone: "",
        detail: "",
        isDefault: false,
        region: ['北京市', '北京市', '东城区'],
    },

    onLoad: function (options) {

    },


    IsDefaultChange() {
        this.setData({
            isDefault: !this.data.isDefault
        })

    },
    UserNameInput(e) {
        this.setData({
            userName: e.detail.value
        })
    },

    PhoneInput(e) {
        this.setData({
            phone: e.detail.value
        })
    },

    detailInput(e) {
        this.setData({
            detail: e.detail.value
        })
    },
})