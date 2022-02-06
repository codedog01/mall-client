const APP = getApp()
const imgUtil = require("../../../utils/imgUtil")
const API = require("../../../servers/api")
Page({
    data: {
        columnsIndex: 0,
        columns: ['衣服', '鞋子', '首饰', '手机', '电脑', '外设', '其他'],
        imgList: [],
    },

    onReady() {
        this.toast = this.selectComponent("#toast");
    },
    toastClick(flag, mes, timeout) {
        this.toast.setShow(flag ? "success" : "error", mes, timeout);
    },

    Publish() {
        let res = this.data.imgList.map(async (imgItem, index) => {
            var img = await imgUtil.toBase64(imgItem)
            return {
                'imgBase64': img,
                'sort': index
            }
        })

        Promise.all(res).then(value => {
            API.addGoods({
                name: this.data.name,
                describle: this.data.describle,
                price: this.data.price,
                num: this.data.num,
                type: this.data.columns[this.data.columnsIndex],
                openId: APP.globalData.user.openId,
                imgList: value
            }).then(() => {
                this.toastClick(true, "发布成功~")
            }).catch(() => {
                this.toastClick(false, "发布失败~")
            })
        })

    },
    ChooseImage() {
        wx.chooseImage({
            count: 9, //默认9
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album'], //从相册选择
            success: (res) => {
                if (this.data.imgList.length !== 0) {
                    this.setData({
                        imgList: this.data.imgList.concat(res.tempFilePaths)
                    })
                } else {
                    this.setData({
                        imgList: res.tempFilePaths
                    })
                }
            }
        });
    },
    ViewImage(e) {
        wx.previewImage({
            urls: this.data.imgList,
            current: e.currentTarget.dataset.url
        });
    },
    DelImg(e) {
        wx.showModal({
            title: '同学',
            content: '确定要删除这图片吗？',
            cancelText: '再看看',
            confirmText: '再见',
            success: res => {
                if (res.confirm) {
                    this.data.imgList.splice(e.currentTarget.dataset.index, 1);
                    this.setData({
                        imgList: this.data.imgList
                    })
                }
            }
        })
    },
    RegionChange: function (e) {
        this.setData({
            columnsIndex: e.detail.value
        })
    },
});