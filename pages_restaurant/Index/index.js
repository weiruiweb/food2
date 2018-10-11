//index.js
//获取应用实例
import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();

Page({
  data: {
    background: ['/images_restaurant/banner1.jpg', '/images_restaurant/banner2.jpg', '/images_restaurant/banner3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
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
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperIndex: e.detail.current,
    })
  },
  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },
  intoPathRedirect(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'redi');
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

  