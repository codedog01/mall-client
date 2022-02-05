const APP = getApp()
const imgUtil = require("../../utils/imgUtil")
const API = require("../../servers/api")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarImage: '游客B627',
        nickName: '游客B627'
    },
    onLoad(query) {
        API.uploadAvatar({
            avatarImage: this.data.avatarImage,
            openId: APP.globalData.user.openId,
        })
    },
    ChooseImage(e) {
        if (e.target.dataset.type === 'image') {
            return;
        }
        const _this = this
        wx.chooseImage({
            count: 1, //默认9
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album'], //从相册选择
            success(res) {
                // tempFilePath可以作为img标签的src属性显示图片
                const tempFilePaths = res.tempFilePaths[0];
                _this.setData({
                    avatarImage: tempFilePaths
                })
                //上传图片
                wx.uploadFile({
                    //请求后台的路径
                    url: "http://localhost:8080/api/",
                    //小程序本地的路径
                    filePath: tempFilePaths,
                    //后台获取我们图片的key
                    name: 'avatar',
                    //额外的参数formData
                    formData: {
                        'openId': wx.getStorageSync('openId'),
                    },
                    success: function (res) {
                        //上传成功
                        avatarImage = tempFilePaths
                    },
                })
            }
        });
    },
    navigateTo(event) {
        wx.navigateTo({
            url: event.currentTarget.dataset.url,

        })
    },
})