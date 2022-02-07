const APP = getApp()
const imgUtil = require("../../utils/imgUtil")
const API = require("../../servers/api")
const dayjs = require("dayjs")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        dynamicList: [

        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onShow: function (options) {
        API.selectDynamics().then(res => {
            let data = {
                dynamicList: this.data.dynamicList,
            }
            data.dynamicList = res.data.map(item => {
                return {
                    avatar: item.avatar,
                    name: item.name,
                    time: dayjs(parseInt(item.createTime)).format('YYYY年MM月DD日'),
                    content: item.content,
                }
            })
            this.setData(data)
        })
    },
})