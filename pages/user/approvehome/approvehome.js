// pages/user/approvehome/approvehome.js
/**  {
        id: 0,
        xqname: "小康小区",
        danyuanlou: ["1栋", "2栋", "3栋", ],
        home: ["101", "102", "201", "202", "301", "302", "401", "402"]
      },
      {
        id: 1,
        xqname: "复兴小区",
        danyuanlou: ["1栋", "2栋", "3栋",],
        home: ["101", "102", "201", "202", "301", "302", "401", "402"]
      }, */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeArrays: [],
    xiaoquName: [{
        id: 0,
        name: "小康小区"
      },
      {
        id: 1,
        name: "复兴小区"
      }
    ],


  },
  //点击小区名字，跳转到小区栋（建筑物的选择）
  selectBuilding(e) {
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
    //发送请求到后台，获得所有小区


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
    console.log('查询数据')
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