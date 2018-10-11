//logs.js
import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();
Page({
  data: {
    
  },
  onLoad: function () {
    this.setData({
      fonts:app.globalData.font
    })
  },
})
