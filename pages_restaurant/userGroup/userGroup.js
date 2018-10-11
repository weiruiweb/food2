//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  currentId:0,
  
  },
  
  onLoad: function () {
   
  },
  order_status:function(e){
    var current = e.currentTarget.dataset.id
    this.setData({
      currentId:current
    })
  },
  commentOrder:function(){
    wx.navigateTo({
      url:'/pages_restaurant/commentOrder/commentOrder'
    })
  },
  manageAddress:function(){
    wx.navigateTo({
      url:'/pages_restaurant/manageAddress/manageAddress'
    })
  }
})
