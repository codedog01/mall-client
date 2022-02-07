import {domain} from "../../servers/api";

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
    // avatarImage: this.data.avatarImage,
    onLoad() {
        API.getUserInfo({
            openId: APP.globalData.user.openId
        }).then(res=>{
          console.log(res);
          this.setData({
            avatarImage: res.data.avatar,
            nickName: res.data.nickName
          })
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

                    url: API.domain+"user/uploadAvatar",
                    filePath: tempFilePaths,
                    name: 'avatarImage',
                    formData: {
                        'openId': wx.getStorageSync('openId'),
                    }
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