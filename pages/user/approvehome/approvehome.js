// pages/user/approvehome/approvehome.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeArrays: [],
    xiaoquName: null,
    searchstr:'',

  },
  //点击小区名字，跳转到小区栋（建筑物的选择）
  selectBuilding(e) {
    console.log(e.currentTarget.dataset)
    var xiaoquid = e.currentTarget.dataset.xiaoquid
    console.log(xiaoquid)
    wx.navigateTo({
      url: 'building/building?xiaoquid=' + JSON.stringify(xiaoquid),
      events: {
        // // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        // acceptDataFromOpenedPage: function(data) {
        //   console.log(data)
        // },
        // someEvent: function(data) {
        //   console.log(data)
        // }
      },
      success: function(res) {
        res.eventChannel.emit('acceptDataFromOpenerPage', {"xiaoquid":xiaoquid})
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //发送请求到后台，获得该用户所处城市小区列表

    var thar = this;
    wx.request({
      url: app.globalData.url +'/community/communityList',
      method:"get",
      data:{
        city:wx.getStorageSync("city")
      },
      success(res){
        // console.log(res.data)
        thar.setData({
          xiaoquName:res.data,
        })
        wx.setStorageSync("communityList", res.data)
      }
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

  },
  //搜索框输入时触发
  searchList(ev) {
    let e = ev.detail;
    this.setData({
      searchstr: e.detail.value
    })
    console.log(this.data.searchstr);
    

  },
  //搜索回调
  endsearchList(e) {
    var that = this;
    console.log('查询数据')
    var communityList = wx.getStorageSync("communityList")
    var newlist = [];
    communityList.forEach(function (item, index) {
      if (item.communityName.lastIndexOf(that.data.searchstr) != -1) {
        newlist.push(item)
      }
    });
    that.setData({
      xiaoquName: newlist
    })
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: ''
    })
    console.log('取消搜索')
  },
  //清空搜索框
  activity_clear(e) {
    this.setData({
      searchstr: ''
    })
    console.log('清空搜索框')
  }
})