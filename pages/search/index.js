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
            {
                avatar: "",
                name: "张三",
                time: "2020年1月30日",
                content: "贱卖了贱卖了",
                title: "标题"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        API.selectDynamics().then(res => {
          console.log(res);
            const dynamicList = res.data.map(item => {
                return {
                    avatar: item.avatar,
                    name: item.name,
                    time: dayjs(parseInt(item.time)).format('YYYY年MM月DD日'),
                    content: item.content,
                }
            })
            this.setData({
                dynamicList: dynamicList
            })
        })
    },


})