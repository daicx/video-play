// pages/smallvideo/smallvideo.js

Page({
   /**
   * 页面的初始数据
   */

  data: {
    zanBackImg: '11',
    smallvideo: [
      {id:1,title:"少林足球",desc:"d多大肺癌澳大大的大的",time:"1:00",label:["大气","壮观"],iflike:11},
      { id: 2,title: "少林足球1", desc: "d多大肺癌澳大大的大的", time: "1:00", label: ["大气","壮观"], iflike: -11 },
      { id: 3,title: "少林足球2", desc: "d多大肺癌澳大大的大的", time: "1:00", label: ["文艺","壮观","壮观","大大大"] ,iflike: -11 },
      { id: 4, title: "少林足球3", desc: "d多大肺癌澳大大的大的", time: "1:00", label: ["搞笑","壮观","翡翠城"], iflike: 11 },
    ]
  },
  zanImg: function(e){
    var that=this;
    var index = e.currentTarget.dataset.index;
    var item = that.data.smallvideo[index];
    item.iflike = -item.iflike;
    this.setData({
      smallvideo: that.data.smallvideo
    })
  },
  onShareAppMessage: function (e) {
    // var that=this;
    // var index = e.currentTarget.dataset.index;
    // var item = that.data.smallvideo[index];
    // console.log(item)
    // return {
    //   title: 'item.title',
    //   desc: 'item.desc',
    //   path: '/pages/introduce'
    // }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

 
})