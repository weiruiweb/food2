//logs.js
const util = require('../../utils/util.js')
const app = getApp()


Page({
  data: {
    
  },
  onLoad: function () {
    this.setData({
      fonts:app.globalData.font
    })
  },
  queueTime:function(){
     wx.redirectTo({
      url:'/pages/queueTime/queueTime'
    })
  },
})
