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

    onReady() {
        this.toast = this.selectComponent("#toast");
    },
    toastClick(flag, mes, timeout) {
        this.toast.setShow(flag ? "success" : "error", mes, timeout);
    },

    Submit() {
        API.addAddress({
            openId: APP.globalData.user.openId,
            userName: this.data.userName,
            phone: this.data.phone,
            detail: this.data.detail,
            isDefault: this.data.isDefault,
            province: this.data.region[0],
            city: this.data.region[1],
            counties: this.data.region[2],
        }).then(() => {
            this.toastClick(true, "添加成功~")
            let fun = () => {
                wx.switchTab({
                    url: "../index"
                })
            };
            let sleep = (time) => new Promise((resolve) => {
                setTimeout(resolve, time)
            })
            sleep(1200).then(fun);
        }).catch(() => {
            this.toastClick(false, "添加失败~")
        })
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
    regionChange: function (e) {
        this.setData({
            region: e.detail.value
        })
    },
})