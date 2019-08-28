// pages/advise/advise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: [
      { id: 0, name: '实名投诉' },
      { id: 1, name: '匿名投诉' }
    ],
    department:[
      {id:0,name:'物业'},
      {id:1,name:'业委会'}
    ],
    textContent:null,
    typeId:null,
    departmentId:null,
  },
  submit(){
    wx.showToast({
      title: '提交成功',
    })
  },
  textInput(e){
    console.log(e.detail.value)
    this.setData({
      textContent: e.detail.value,
    })
  },
  typeRadioChange(e){
    console.log("投诉类型id："+e.detail.value)
    this.setData({
      typeId: e.detail.value,
    })
  },
  departmentRadioChange(e){
    console.log("投诉部门id：" +e.detail.value)
    this.setData({
      departmentId: e.detail.value,
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