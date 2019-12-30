// pages/vote/votedetails/votedetalis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    approvalHeight: 0,
    abstentionHeight: 0,
    opposeHeight: 0,
    issue:'',
    community:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var issueId;
    const eventChannel = this.getOpenerEventChannel()
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
       issueId = data.data
    })
    var issueList = wx.getStorageSync("issueList")

    issueList.forEach((item,index)=>{
      if(item.issueId == issueId){
        this.setData({
          issue:item,
          approvalHeight:item.issueAgree,
          abstentionHeight:item.issueWaiver,
          opposeHeight:item.issueOppose
        })
      }
    })
    this.setData({
      community: wx.getStorageSync("home")
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