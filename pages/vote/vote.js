// pages/vote/vote.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    voteArray:[],
    array: [],
    oldArray:[],
    flag:0,
    community:'',
    issueList:[],

  },
  stayVote(e){//待投票按钮
    var that = this;
    wx.request({
      url: app.globalData.url+'/issue/ownerVoteList',
      data:{
        'ownerId':wx.getStorageSync("loginFlag")
      },
      success(res){
        that.setData({
          issueList:res.data
        })
        var votes = that.data.array
        var list = that.data.issueList
        votes.forEach(function (aItem, indexa) {
          console.log(aItem)
          list.forEach((bItem, indexb) => {
            if (aItem.issueId == bItem.issueId) {
              votes.splice(indexa,1);
            }
          })

        })
        that.setData({
          voteArray: votes,
          flag: 1,
        })
      }
    })


    
  },
  voted(e){//已投票按钮
    var that = this;
    wx.request({
      url: app.globalData.url + '/issue/ownerVoteList',
      data: {
        'ownerId': wx.getStorageSync("loginFlag")
      },
      success(res) {
        that.setData({
          issueList: res.data
        })
      }
    })
    var votes = wx.getStorageSync("issueList");
    var votedArr = [];
    var list = this.data.issueList
    votes.forEach(function (aItem, index) {
      // console.log(votes[index])
      list.forEach((bItem,index)=>{
        if (aItem.issueId == bItem.issueId) {
          votedArr.push(aItem);
        }
      })
      
    })
    this.setData({
      voteArray: votedArr,
      flag:0,
    })
    console.log(this.data.flag)
    console.log(votedArr)
  },
  voteDetails(e){
    console.log(e.currentTarget)
    const issueId = e.currentTarget.dataset.issueid
    console.log(issueId)
    console.log("跳转到查看详情页面")
    wx.navigateTo({
      url: 'votedetails/votedetalis',
      success(res){
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: issueId })
      }
    })
  },
  votefinal(e){
    const issueId = e.currentTarget.dataset.issueid
    console.log("跳转到查看结果页面")
    wx.navigateTo({
      url: 'votefinal/votefinal',
      success(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: issueId })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var community = wx.getStorageSync("home")
    
    var that = this
    wx.request({
      url: app.globalData.url+'/issue/issueList',
      data:{
        "communityId":community.communityId
      },
      success(res){
        var now = Date.parse(new Date());
        var list = res.data.data.issueList
        list.forEach((item,index)=>{
          var startTime = item.issueStartTime
          var sdate = that.getMyDate(startTime)
          var endTime = item.issueEndTime
          var edate = that.getMyDate(endTime)
          var nowDate = that.getMyDate(now)
          item.issueStartTime = sdate
          item.issueEndTime = edate
          if (item.issueEndTime >= nowDate){
            item['flag'] = 0
          }
        })
        that.setData({
          array:list
        })
        wx.setStorageSync("issueList", list)
        that.stayVote()
      }
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
    var community = wx.getStorageSync("home")
    this.setData({
      community:community.communityName
    })
    this.onLoad()
    
    
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
  getMyDate(str) {
        var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
          oTime = oYear + '-' + this.addZero(oMonth) + '-' + this.addZero(oDay)
          // oTime = oYear + '-' + this.addZero(oMonth) + '-' + this.addZero(oDay) + ' ' + this.addZero(oHour) + ':' +
          //   this.addZero(oMin) + ':' + this.addZero(oSen);
        return oTime;
  },
  //补零操作
  addZero(num){
    if(parseInt(num) < 10){
  num = '0' + num;
}
return num;
}
 
})