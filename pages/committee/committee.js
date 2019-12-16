// pages/committee/committee.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fun:[
      { id: 0, title: "组建业委会", url: "images/create.png",img: '../images/more-right.png'},
      { id: 1, title: "发布公告", url: "images/regime.png", img: '../images/more-right.png'},
      { id: 2, title: "发起议题", url: "images/apply.png", img: '../images/more-right.png' },
      { id: 3, title: "投票选举",url: "images/office.png", img: '../images/more-right.png'},
      { id: 4, title: "法规查询", url: "images/advice.png", img: '../images/more-right.png'},
      { id: 5, title: "社区党建", url: "images/party.png", img: '../images/more-right.png'},
      { id: 6, title: "业委会组织图",  url: "images/repair.png", img: '../images/more-right.png'},
      { id: 7, title: "政府之窗", url: "images/formula.png", img: '../images/more-right.png'}
    ]
  },
  fun(e) {
    var fun = this.data.fun[e.currentTarget.dataset.id]
    console.log(fun.title)
    if (e.currentTarget.dataset.id == 0){
      wx.navigateTo({
        url: '/pages/committee/create/create',
      })
    } else if (e.currentTarget.dataset.id == 3){
      wx.navigateTo({
        url: '/pages/committee/candidate/candidate',
      })
    }else{
      wx.showToast({
        title: fun.title + '正在开发中',
        icon: "none",
      })
    }
    
    
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