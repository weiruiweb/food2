//logs.js
const util = require('../../utils/util.js')
const app = getApp()


Page({
  data: {
    isChoose:1
  },
  onLoad: function () {
    this.setData({
      fonts:app.globalData.font
    })
  },
  userInfo:function(){
    wx.navigateTo({
      url:'/pages_restaurant/userInfo/userInfo'
    })
  },
  discount:function(){
    wx.navigateTo({
      url:'/pages_restaurant/discount/discount'
    })
  },
  address:function(){
    wx.navigateTo({
      url:'/pages_restaurant/manageAddress/manageAddress'
    })
  },
  order:function(){
    wx.navigateTo({
      url:'/pages_restaurant/userOrder/userOrder'
    })
  },
 shopping:function(){
     wx.redirectTo({
      url:'/pages_restaurant/Shopping/shopping'
    })
  },
  sort:function(){
     wx.redirectTo({
      url:'/pages_restaurant/Sort/sort'
    })
  },
  index:function(){
     wx.redirectTo({
      url:'/pages_restaurant/Index/index'
    })
  },
  User:function(){
     wx.redirectTo({
      url:'/pages_restaurant/User/user'
    })
  },
   choosePay:function(e){
    this.setData({
      isChoose:e.currentTarget.dataset.id
    })
  }
})
