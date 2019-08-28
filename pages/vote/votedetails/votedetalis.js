// pages/vote/votedetails/votedetalis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    approvalHeight:0,
    abstentionHeight:0,
    opposeHeight:0,
  },
  approvalTap(e){
    var h = this.data.approvalHeight;
    h++;
    console.log(h)
    this.setData({
      approvalHeight:h,
    })
    console.log(this.data.approvalHeight)
  },
  
  abstentionTap(e){
    var h = this.data.abstentionHeight;
    h++;
    console.log(h)
    this.setData({
      abstentionHeight:h,
    })
    console.log(this.data.abstentionHeight)
  },
  opposeTap(e) {
    var h = this.data.opposeHeight;
    h++;
    console.log(h)
    this.setData({
      opposeHeight: h,
    })
    console.log(this.data.opposeHeight)
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