// components/u-list/index.js
Component({
  options: {
    addGlobalClass: true
},
  /**
   * 组件的属性列表
   */
  properties: {
    scrollHeight:0,
    scrollTop:0,
    list:{
      type:Array
    },
    i:{
      type:Number,
      default:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {

    scroll(event) {
      console.log(event.detail.scrollTop)

      const {
        scrollLeft,
        scrollTop,
        scrollHeight,
        scrollWidth,
        deltaX,
        deltaY
      } = event.detail;
      // 一个item高度大约为50,itemCount为往下划走了多少个item
      const itemCount = scrollTop / 50;
      if(Math.floor(itemCount / 10) > 21){
        return 
      }
      this.setData({
        i: Math.floor(itemCount / 10)
      })
      console.log(this.data.i);
    },
  }
})
