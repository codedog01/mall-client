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

    onLoad(query) {
        const _this = this
        const eventChannel = this.getOpenerEventChannel();
        eventChannel.on('addrData', (resData) => {
            API.selectOneAddr({addressId: resData.addrId}).then(res => {
                let region = []
                region.push(res.data.province)
                region.push(res.data.city);
                region.push(res.data.counties)
                const data = {
                    id: res.data.id,
                    userName: res.data.userName,
                    phone: res.data.phone,
                    detail: res.data.detail,
                    isDefault: res.data.isDefault,
                    region: region
                };
                _this.setData(data)
            })
        })
    },

    onReady() {
        this.toast = this.selectComponent("#toast");
    },
    toastClick(flag, mes, timeout) {
        this.toast.setShow(flag ? "success" : "error", mes, timeout);
    },

    Submit() {
        const data = {
            id: this.data.id,
            openId: APP.globalData.user.openId,
            userName: this.data.userName,
            phone: this.data.phone,
            detail: this.data.detail,
            isDefault: this.data.isDefault,
            province: this.data.region[0],
            city: this.data.region[1],
            counties: this.data.region[2],
        }
        if (this.data.id) {
            API.updateAddress(data).then(() => {
                this.toastClick(true, "添加成功~")
                let fun = () => {
                    wx.navigateBack({
                        delta: 1
                    })
                };
                let sleep = (time) => new Promise((resolve) => {
                    setTimeout(resolve, time)
                })
                sleep(500).then(fun);
            }).catch(() => {
                this.toastClick(false, "添加失败~")
            });
        } else {
            API.addAddress(data).then(() => {
                this.toastClick(true, "添加成功~")
                let fun = () => {
                    wx.navigateBack({
                        delta: 1
                    })
                };
                let sleep = (time) => new Promise((resolve) => {
                    setTimeout(resolve, time)
                })
                sleep(500).then(fun);
            }).catch(() => {
                this.toastClick(false, "添加失败~")
            });
        }
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