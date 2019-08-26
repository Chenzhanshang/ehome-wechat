// pages/user/approvehome/building/building.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiaoquid: null, //小区的id
    buildingArray: [
      { id: 0, name: "小康小区1幢" },
      { id: 1, name: "小康小区2幢" },
      { id: 2, name: "小康小区3幢" },
      { id: 3, name: "小康小区4幢" },
    ],


  },
  //点击小区栋号（建筑物的选择），跳转到房号的选择
  selectBuilding(e) {
    var that = this;
    var buildingid = e.currentTarget.dataset.xiaoquid
    console.log(buildingid)
    wx.navigateTo({
      url: 'homenum/homenum?buildingid=' + JSON.stringify(buildingid),
      success: function (res) {
        res.eventChannel.emit('acceptDataFromOpenerPage', { "buildingid": buildingid ,"xiaoquid":that.data.xiaoquid})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', { data: 'xiaoquid' });
    // eventChannel.emit('someEvent', { data: 'xiaoquid' });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log("小区的id是:" + data.xiaoquid)
      that.setData({
        xiaoquid: data.xiaoquid
      })
    })
    //发送请求到后台，通过小区id获得该小区的所有建筑物
    //发送请求到后台，通过buildingid获取到该栋所有的房号

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})