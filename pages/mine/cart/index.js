const APP = getApp()
const imgUtil = require("../../../utils/imgUtil")
const API = require("../../../servers/api")
Page({

    data: {
        refresherTriggered: false,
        totalPrice: 0,
    },

    onReady() {
        this.toast = this.selectComponent("#toast");
    },
    toastClick(flag, mes, timeout) {
        this.toast.setShow(flag ? "success" : "error", mes, timeout);
    },


    onClickButton() {
        API.doDeal({
            openId: APP.globalData.user.openId,
        }).then(()=>{
            this.toastClick(true, "提交成功~")
            API.getCart({
                openId: APP.globalData.user.openId,
            }).then(res => {
                this.setData({
                    goods: res.data
                }).finally(this.calculateTotalPrice());
            })
        }).catch(()=>{
            this.toastClick(true, "提交失败~")
        })
    },
    calculateTotalPrice() {
        const goods = this.data.goods;
        let totalPrice = 0;
        let discount = "";
        goods.map(item => {
            totalPrice += item.price * item.num * 100;
        })
        if (totalPrice >= 200000) {
            totalPrice *= 0.7
            discount = "七折"
        } else if (totalPrice >= 150000) {
            totalPrice *= 0.8
            discount = "八折"
        } else if (totalPrice >= 90000) {
            totalPrice *= 0.9
            discount = "九折"
        } else if (totalPrice >= 50000) {
            totalPrice *= 0.95
            discount = "九五折"
        }
        this.setData({
            totalPrice: totalPrice,
            discount: discount
        });
    },

    onPullDownRefresh() {
        API.getCart({
            openId: APP.globalData.user.openId,
        }).then(res => {
            this.setData({
                goods: res.data
            })
        }).finally(() => {
                this.setData({
                    refresherTriggered: false
                })
                this.calculateTotalPrice();
            }
        )
    },

    DelLike(e) {
        wx.showModal({
            title: '亲',
            content: '确定要删除这件商品吗？',
            cancelText: '点错了',
            confirmText: '再见',
            success: res => {
                if (res.confirm) {
                    let goods = this.data.goods;
                    const one = goods[e.currentTarget.dataset.index]
                    goods.splice(e.currentTarget.dataset.index, 1)
                    this.setData({goods: goods})
                    API.reduceLike({
                        goodsId: e.currentTarget.dataset.likes_id,
                        openId: APP.globalData.user.openId,
                    }).catch(() => {
                        goods.push(one)
                        this.setData({goods: goods})
                    }).finally(this.calculateTotalPrice());
                }
            }
        })
    },

    AddLike(e) {
        let goods = this.data.goods;
        goods[e.currentTarget.dataset.index].num += 1;
        this.setData({goods: goods})
        API.addLike({
            goodsId: e.currentTarget.dataset.likes_id,
            openId: APP.globalData.user.openId,
        }).catch(() => {
            let goods = this.data.goods;
            goods[e.currentTarget.dataset.index].num -= 1;
            this.setData({goods: goods})
        }).finally(this.calculateTotalPrice());
    },

    ReduceLike(e) {
        const num = this.data.goods[e.currentTarget.dataset.index].num;
        if (num === 1) {
            this.DelLike(e);
        } else {
            let goods = this.data.goods;
            goods[e.currentTarget.dataset.index].num -= 1;
            this.setData({goods: goods})
            API.reduceLike({
                goodsId: e.currentTarget.dataset.likes_id,
                openId: APP.globalData.user.openId,
            }).catch(() => {
                let goods = this.data.goods;
                goods[e.currentTarget.dataset.index].num += 1;
                this.setData({goods: goods})
            }).finally(this.calculateTotalPrice());
        }

    },

    onLoad: function (options) {
        API.getCart({
            openId: APP.globalData.user.openId,
        }).then(res => {
            this.setData({
                goods: res.data
            }).finally(this.calculateTotalPrice());
        })
    },


})