// pages/user/myapprove/myapprove.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeArray: [{
        id: 0,
        name: "小康小区",
        isSelected: 1
      },
      {
        id: 1,
        name: "复兴小区",
        isSelected: 0
      },
    ],
  },
  renzheng(){
    wx.navigateTo({
      url: '../approvehome/approvehome',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  // renzheng() {
  //   wx.navigateTo({
  //     url: '../chooselocation/chooselocation',
  //     success: function (res) { },
  //     fail: function (res) { },
  //     complete: function (res) { },
  //   })

  // },

  unselected(e) { //房屋未选中时
  console.log(e)
    var that = this;
    var arrays = this.data.homeArray;
    wx.showModal({
      title: '提示',
      content: '您是否要切换房屋',
      success(res) {
        if (res.confirm) {
          arrays.forEach(function (item, index) {
            var str = "homeArray[" + index + "].isSelected"
            if (e.currentTarget.dataset.id == item.id) {
              that.setData({
                [str]: 1,
              })
            } else {
              that.setData({
                [str]: 0,
              })
            }
          })
        } 

      }
    })
    


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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