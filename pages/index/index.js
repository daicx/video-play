//index.js
import api from '../../api/api'
import { index } from '../../api/uri' 
//获取应用实例  
var Util = require('../../utils/util.js');
var app = getApp()

Page({
  data: {
    index: {
      "auto": [{
        "videoId": "212",
        "url": "http://www.saiyaku.com/wp-content/uploads/2018/12/12.mp4?_=1",
        "title": "山鹰之歌",
        "descs": "山鹰之歌,一带民族的血泪史",
        "categary": "hot",
        "updatetime": "2018-12-28 11:14:18",
        "playCount": 12,
        "scene": "12",
        "autoPlay": true,
        "label": "好,民谣",
        "showed": true,
        "smallVideo": true
      }],
      "hot": [{
        "videoId": "212",
        "url": "http://www.saiyaku.com/wp-content/uploads/2018/12/12.mp4?_=1",
        "title": "山鹰之歌",
        "descs": "山鹰之歌,一带民族的血泪史",
        "categary": "hot",
        "updatetime": "2018-12-28 11:14:18",
        "playCount": 12,
        "scene": "12",
        "autoPlay": true,
        "label": "好,民谣",
        "showed": true,
        "smallVideo": true
      }],
      "grand": [{
        "videoId": "212",
        "url": "http://www.saiyaku.com/wp-content/uploads/2018/12/12.mp4?_=1",
        "title": "山鹰之歌",
        "descs": "山鹰之歌,一带民族的血泪史",
        "categary": "hot",
        "updatetime": "2018-12-28 11:14:18",
        "playCount": 12,
        "scene": "12",
        "autoPlay": true,
        "label": "好,民谣",
        "showed": true,
        "smallVideo": true
      }],
      "festival": [{
        "videoId": "212",
        "url": "http://www.saiyaku.com/wp-content/uploads/2018/12/12.mp4?_=1",
        "title": "山鹰之歌",
        "descs": "山鹰之歌,一带民族的血泪史",
        "categary": "hot",
        "updatetime": "2018-12-28 11:14:18",
        "playCount": 12,
        "scene": "12",
        "autoPlay": true,
        "label": "好,民谣",
        "showed": true,
        "smallVideo": true
      }]
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // this.setData({
    //   auto: that.data.index.auto,
    //   hot: that.data.index.hot,
    //   grand: that.data.index.grand,
    //   festival: that.data.index.festival
    // })
    api.get(index).then(res => {
      console.log(res)
      this.setData({
        auto: res.auto,
        hot: res.hot,
        grand: res.grand,
        festival: res.festival
      })
    }).catch(err => {
      console.log(err)
      wx.showToast({
        title: err.message,
        icon: 'none'
      })
    })
    
  },
  playClick: function (e) {
    var videoId=e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../introduce/introduce?videoId='+videoId
    })
  },
  introduce: function () {
    wx.navigateTo({
      url: '../introduce/introduce?id=1'
    })
  },
  suo: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  video_list: function () {
    wx.navigateTo({
      url: '../introduce/introduce',
    })
  }
})