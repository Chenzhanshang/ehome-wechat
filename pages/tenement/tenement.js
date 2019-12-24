// pages/tenement/tenement.js
const app = getApp()
Page({

  /**
   * 页面的初始数据'智能门禁',
      '访客邀请',
      '物业管家',
      '房屋交付',
      '违章举报',
      '物业缴费',
      '物业公告' ,
      '建议反馈'
   */
  data: {
    funArr: [
      {id:0, url: '../images/xqxx.png', title: '小区信息', img: '../images/more-right.png'}, 
      {id:1, url: '../images/fkyq.png', title: '访客邀请', img: '../images/more-right.png' }, 
      { id: 2,url: '../images/wygj.png', title: '物业管家', img: '../images/more-right.png' }, 
      { id: 3,url: '../images/fwjf.png', title: '房屋交付', img: '../images/more-right.png' }, 
      { id: 4,url: '../images/wzjb.png', title: '违章举报', img: '../images/more-right.png' }, 
      { id: 5,url: '../images/wygg.png', title: '物业公告', img: '../images/more-right.png' }, 
      { id: 6,url: '../images/znmj.png', title: '智能门禁', img: '../images/more-right.png' }, 
      { id: 7, url: '../images/repair.png', title: '报事报修', img: '../images/more-right.png', navUrl: '../repair/repair'},
      { id: 8,url: '../images/jyfk.png', title: '建议反馈', img: '../images/more-right.png',navUrl:'../advise/advise' }, 
      ],
  },
  fun(e){
    var fun = this.data.funArr[e.currentTarget.dataset.id]
    console.log(fun.title)
    wx.showToast({
      title: fun.title+'正在开发中',
      icon:"none",
    })
  },
  shenqingruzhu(){
    wx.showToast({
      title: '该功能正在开发中',
      icon: "none",
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