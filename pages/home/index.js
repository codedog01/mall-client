const APP = getApp()
const imgUtil = require("../../utils/imgUtil")
const API = require("../../servers/api")
Page({

    /**
     * 页面的初始数据
     */
    data: {

        activeKey: 1,
        commodity: []
        // commodity: [
        //     {
        //         label: {
        //             name: "衣服",
        //             idx: 0
        //         },
        //         goods: [{
        //             title: "衣服",
        //             num: 1,
        //             tag: "火爆",
        //             price: 50,
        //             desc: "这东西太好了",
        //             thumb: [],
        //         },
        //         ]
        //     },
        //     {
        //         label: {
        //             name: "鞋子",
        //             idx: 1
        //         },
        //         goods: [{
        //             title: "鞋子",
        //             num: 1,
        //             tag: "火爆",
        //             price: 50,
        //             desc: "这东西太好了",
        //             thumb: [],
        //         },
        //         ]
        //     },
        //     {
        //         label: {
        //             name: "首饰",
        //             idx: 2
        //         },
        //         goods: [{
        //             title: "首饰",
        //             num: 1,
        //             tag: "火爆",
        //             price: 50,
        //             desc: "这东西太好了",
        //             thumb: [],
        //         },
        //         ]
        //     },
        //     {
        //         label: {
        //             name: "手机",
        //             idx: 3
        //         },
        //         goods: [{
        //             title: "手机",
        //             num: 1,
        //             tag: "火爆",
        //             price: 50,
        //             desc: "这东西太好了",
        //             thumb: [],
        //         },
        //         ]
        //     },
        //     {
        //         label: {
        //             name: "电脑",
        //             idx: 4
        //         },
        //         goods: [{
        //             title: "电脑",
        //             num: 1,
        //             tag: "火爆",
        //             price: 50,
        //             desc: "这东西太好了",
        //             thumb: [],
        //         },
        //         ]
        //     },
        //     {
        //         label: {
        //             name: "外设",
        //             idx: 5
        //         },
        //         goods: [{
        //             title: "外设",
        //             num: 1,
        //             tag: "火爆",
        //             price: 50,
        //             desc: "这东西太好了",
        //             thumb: [],
        //         },
        //         ]
        //     },
        //     {
        //         label: {
        //             name: "其他",
        //             idx: 6
        //         },
        //         goods: [{
        //             title: "其他",
        //             num: 1,
        //             tag: "火爆",
        //             price: 50,
        //             desc: "这东西太好了",
        //             thumb: [],
        //         },
        //         ]
        //     },
        // ]
    },
    onLoad() {
        let data = {
            commodity: this.data.commodity,
        }
        API.selectGoods().then(res => {
            console.log(res)
            data.commodity = res.data
            this.setData(data)
        })
    },

    ChangeBar(e) {
        this.setData({
            activeKey: e.currentTarget.dataset.index
        })

    }
})