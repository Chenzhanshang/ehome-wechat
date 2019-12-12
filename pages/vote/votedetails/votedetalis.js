// pages/vote/votedetails/votedetalis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    approvalHeight: 0,
    abstentionHeight: 0,
    opposeHeight: 0,
    issueList: [],
    issue:null,
    community:null,
  },
  approvalTap(e) {
    var h = this.data.approvalHeight;
    h++;

    this.setData({
      approvalHeight: h,
    })

  },

  abstentionTap(e) {
    var h = this.data.abstentionHeight;
    h++;

    this.setData({
      abstentionHeight: h,
    })

  },
  opposeTap(e) {
    var h = this.data.opposeHeight;
    h++;

    this.setData({
      opposeHeight: h,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var list = wx.getStorageSync("issueList")
    this.setData({
      issueList: list,
      community:wx.getStorageSync("home")
    })
    var issueList = this.data.issueList
    console.log(issueList)
    const eventChannel = this.getOpenerEventChannel()
    var that = this;
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data.data)
      issueList.forEach((item, index )=> {
        if(item.issueId == data.data){
          that.setData({
            issue:item
          })
          console.log(that.data.issue)
        }
      })
    })
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