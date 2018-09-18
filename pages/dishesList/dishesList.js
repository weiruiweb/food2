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
  backDishes:function(){
    wx.navigateTo({
      url:'/pages/Dishes/dishes'
    })
  },
  confirmDishes:function(){
    wx.navigateTo({
      url:'/pages/dishesComfirm/dishesComfirm'
    })
  },
  
})
