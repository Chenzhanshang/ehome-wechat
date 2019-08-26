// pages/user/approvehome/building/homenum/homenum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiaoquid:null,//小区号
    buildingid:null,//栋号
    buildNumId:null,//房号
    buildNumArray:[
      {id:0,name:"101"},
      { id: 1, name: "102" },
      { id: 2, name: "201" },
      { id: 3, name: "202" },
      { id: 4, name: "301" },
      { id: 5, name: "302" },
      { id: 6, name: "401" },
      { id: 7, name: "402" },
    ]

  },
  //房号的选择，
  selectBuilding(e) {
    var that = this;
    var buildNumId = e.currentTarget.dataset.xiaoquid
    console.log(buildNumId)
    this.setData({
      buildNumId: buildNumId,
    })
    console.log("小区的id是:" + that.data.xiaoquid + ",建筑物的id是:" + that.data.buildingid+",房号id是"+that.data.buildNumId)
    wx.navigateTo({
      url: 'approve/approve?xiaoquid=' + that.data.xiaoquid + "&buildingid=" + that.data.buildingid + "&buildNumId=" + that.data.buildNumId,
      success: function (res) {
        res.eventChannel.emit('acceptDataFromOpenerPage', { "buildingid": that.data.buildingid, "xiaoquid": that.data.xiaoquid, "buildNumId": that.data.buildNumId })
      }
    })
    
    
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
      that.setData({
        buildingid: data.buildingid,
        xiaoquid:data.xiaoquid
      })
    })
    
    //发送请求到后台，通过buildingid获取到该栋所有的房号
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