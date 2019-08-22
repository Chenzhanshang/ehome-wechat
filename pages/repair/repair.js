// pages/repair/repair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:null,
    time:null,
    date:null,
    text:"无",
    typeArray:["水电","电梯","暖气","管道","通风","楼地面","屋面","其他"],
    timeArray: ["8:00~8:59", "9:00~9:59", "10:00~10:59", "11:00~11:59", "12:00~12:59", "13:00~13:59", "14:00~14:59", "15:00~15:59", "16:00~16:59", "17:00~17:59", "18:00~18:59", "19:00~19:59", "20:00~20:59", "21:00~21:59", "22:00~22:59"],
    typeIndex:0,
    timeIndex:0,

  },
  //提交按键
  submitRepair(e){
    wx.showToast({
      title: '提交成功',
    })
  },
  //获取文本区的内容
  textInput(e){
    console.log(e.detail.value)
    this.setData({
      text: e.detail.value,
    })
  },
  tap2type(e){
    console.log(e.detail.value) 
    this.setData({
      type: this.data.typeArray[e.detail.value],
    })
  },
  tap2date(e){
    this.setData({
      date:e.detail.value,
    })
  },
  tap2time(e) {
    this.setData({
      time: this.data.timeArray[e.detail.value],
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})