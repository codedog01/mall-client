// pages/home/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey: 1,
        labels: [
            {name: "衣服", idx: 0},
            {name: "鞋子", idx: 1},
            {name: "首饰", idx: 2},
            {name: "手机", idx: 3},
            {name: "电脑", idx: 4},
            {name: "外设", idx: 5},
            {name: "其他", idx: 6},
        ],
        goods: [
            [{
                title: "衣服", num: 1,
                tag: "火爆",
                price: 50,
                desc: "这东西太好了",
                thumb: "",
            },
            ], [{
                title: "鞋子", num: 1,
                tag: "火爆",
                price: 50,
                desc: "这东西太好了",
                thumb: "",
            },
            ], [{
                title: "首饰", num: 1,
                tag: "火爆",
                price: 50,
                desc: "这东西太好了",
                thumb: "",
            },
            ], [{
                title: "手机", num: 1,
                tag: "火爆",
                price: 50,
                desc: "这东西太好了",
                thumb: "",
            },
            ], [{
                title: "电脑", num: 1,
                tag: "火爆",
                price: 50,
                desc: "这东西太好了",
                thumb: "",
            },
            ], [{
                title: "外设", num: 1,
                tag: "火爆",
                price: 50,
                desc: "这东西太好了",
                thumb: "",
            },
            ], [{
                title: "其他", num: 1,
                tag: "火爆",
                price: 50,
                desc: "这东西太好了",
                thumb: "",
            },
            ],

        ]
    },

    ChangeBar(e) {
        this.setData({
            activeKey: e.currentTarget.dataset.index
        })

    }
})