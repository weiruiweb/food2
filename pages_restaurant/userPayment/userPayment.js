//index.js
//获取应用实例
import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();
Page({
  data: {
    isChoose:1,
  },
  
  onLoad: function () {
   
  },
   bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
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
  discount:function(){
    wx.navigateTo({
      url:'/pages_restaurant/discount/discount'
    })
  },
  choosePay:function(e){
    this.setData({
      isChoose:e.currentTarget.dataset.id
    })
  }
})
