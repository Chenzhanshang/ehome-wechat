// pages/user/approvehome/building/homenum/approve/approve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiaoquid: null,//小区号
    buildingid: null,//栋号
    buildNumId: null,//房号
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log("小区的id是:" + data.xiaoquid)
      console.log("建筑物的id是:" + data.buildingid)
      console.log("房号的id是:" + data.buildNumId)
      that.setData({
        buildingid: data.buildingid,
        xiaoquid: data.xiaoquid,
        buildNumId:data.buildNumId
      })
    })

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})