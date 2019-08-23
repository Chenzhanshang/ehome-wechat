// pages/vote/vote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    voteArray:[],
    array: [
      { id: 0, title: "关于成立小康小区业委会", topic: "成立业主委员会", addr: "小康小区", startTime: "2019-10-01", endTime: "2019-10-02", voteStatus: "投票中", flag: 0 },
      { id: 1, title: "关于成立小康小区业委会", topic: "成立业主委员会", addr: "小康小区", startTime: "2019-10-01", endTime: "2019-10-02", voteStatus: "投票中", flag: 0 },
      { id: 2, title: "关于成立小康小区业委会", topic: "成立业主委员会", addr: "小康小区", startTime: "2019-10-01", endTime: "2019-10-02", voteStatus: "投票中", flag: 0 },
      { id: 3, title: "关于成立小康小区业委会", topic: "成立业主委员会", addr: "小康小区", startTime: "2019-10-01", endTime: "2019-10-02", voteStatus: "投票中", flag: 1 },
      { id: 4, title: "关于成立小康小区业委会", topic: "成立业主委员会", addr: "小康小区", startTime: "2019-10-01", endTime: "2019-10-02", voteStatus: "投票中", flag: 1 }
    ],
    flag:0,

  },
  stayVote(e){//待投票按钮
    var votes = this.data.array;  
    var stayVoteArr = [];
    votes.forEach(function (item,index){
      // console.log(votes[index])
      if(item.flag==0){
        stayVoteArr.push(item);
      }
    })
    this.setData({
      voteArray:stayVoteArr,
      flag:0,
    })
  },
  voted(e){//已投票按钮
    var votes = this.data.array;
    var votedArr = [];
    votes.forEach(function (item, index) {
      // console.log(votes[index])
      if (item.flag == 1) {
        votedArr.push(item);
      }
    })
    this.setData({
      voteArray: votedArr,
      flag:1,
    })
    console.log(this.data.flag)
  },
  voteDetails(e){
    console.log("跳转到查看详情页面")
    wx.navigateTo({
      url: 'votedetails/votedetalis',
    })
  },
  votefinal(e){
    console.log("跳转到查看结果页面")
    wx.navigateTo({
      url: 'votefinal/votefinal',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.stayVote()
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