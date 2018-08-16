//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: ['/images/banner1.jpg', '/images/banner2.jpg', '/images/banner3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    currentId:0,
    
  },
  //事件处理函数
 
  onLoad: function () {
     this.setData({
          isHidden: false,
          fonts:app.globalData.font
        });
        var that = this;
        setTimeout(function(){
          that.setData({
              isHidden: true
          });
         
        }, 2000);
  },
  group:function(){
     wx.navigateTo({
      url:'/pages/group/group'
    })
  },  
  dishes1:function(){
     wx.navigateTo({
      url:'/pages/dishes1/dishes1'
    })
  },
  dishes2:function(){
     wx.navigateTo({
      url:'/pages/dishes2/dishes2'
    })
  },
  dishes2:function(){
     wx.navigateTo({
      url:'/pages/dishes2/dishes2'
    })
  }, 
  discount:function(){
     wx.navigateTo({
      url:'/pages/discount/discount'
    })
  }, 
  sign:function(){
     wx.navigateTo({
      url:'/pages/Dishes/dishes'
    })
  },
  coldDishes:function(){
     wx.navigateTo({
      url:'/pages/coldDishes/coldDishes'
    })
  }, 
  hotDishes:function(){
     wx.navigateTo({
      url:'/pages/hotDishes/hotDishes'
    })
  }, 
  queue:function(){
     wx.navigateTo({
      url:'/pages/queue/queue'
    })
  },
  sort:function(){
     wx.redirectTo({
      url:'/pages/Dishes/dishes'
    })
  },
  index:function(){
     wx.redirectTo({
      url:'/pages/Index/index'
    })
  },
  User:function(){
     wx.redirectTo({
      url:'/pages/User/user'
    })
  },
  indexDetail:function(){
     wx.navigateTo({
      url:'/pages/indexDetail/indexDetail'
    })
  },
  click_this:function(e){

    this.setData({
      currentId:e.currentTarget.dataset.id
    })
  },
  close:function(){
    // var isShow == !this.data.isShow
    this.setData({
      isShow:true
    })
  }
 
})

  