//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  tapCurrent:0,
  isShow:false,
  isShows:false,
  this_item:0,
  },
  onLoad: function () {
   
  },
  order_status:function(e){
    var current = e.currentTarget.dataset.current
    this.setData({
      currentTap:current
    })
  },
   tabCont:function(e){
      var currentId=e.currentTarget.dataset.id;
      this.setData({
       tapCurrent:currentId
      });
  },
  send_order:function(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  send_order1:function(){
    this.setData({
      isShows:!this.data.isShows
    })
  },
  close:function(){
    this.setData({
      isShow:false
    })
  },
   closed:function(){
    this.setData({
      isShows:false
    })
  },
  this_bg:function(e){
    var currents = e.currentTarget.dataset.current
    this.setData({
      this_item:currents
    })
  }

})
