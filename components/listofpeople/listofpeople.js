// components/listofpeople/listofpeople.js
Component({
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
     data: {
        list: [],
        i: 0
      },

    /**
     * 组件的方法列表
     */
    methods: {

        tabSelect(e) {
            console.log(this.data.windowHeight)

            wx.pageScrollTo({
                scrollTop: 100
            })
            this.setData({
                TabCur: e.currentTarget.dataset.id,
                scrollLeft: (e.currentTarget.dataset.id - 1) * 60

            })
        },
        switchTab(e) {

            wx.pageScrollTo({
                scrollTop: 100
            })
            this.setData({
                TabCur: e.detail.current,
                scrollLeft: (e.detail.current - 1) * 60,
                scrollTop: 0
            })
        },

    }
})
