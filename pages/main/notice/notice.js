// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      noticeList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var list = wx.getStorageSync("noticeList")
    // 数组排序
    list.sort((a,b)=>{
      return b.noticeId - a.noticeId
    })
    this.setData({
      noticeList: list,
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

  },
  //通知被点击
  click(e){
    var noticeId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'details/details',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: noticeId })
      }
    })
  }
})