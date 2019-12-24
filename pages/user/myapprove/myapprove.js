// pages/user/myapprove/myapprove.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeArray: [],
  },
  renzheng(){
    wx.navigateTo({
      url: '../approvehome/approvehome',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  },

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
            if (e.currentTarget.dataset.id == item.communityId) {
              that.setData({
                [str]: 1,
              })
              wx.setStorageSync("home", item)
              //清除缓存
              wx.removeStorageSync("applyCandidateListId")
              wx.removeStorageSync("applyGroupId")
              wx.removeStorageSync("ownerApplyId")
      
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
    var that = this;
    wx.request({
      url: app.globalData.url+'/community/ownerCommunityList',
      data:{
        "ownerId":wx.getStorageSync("loginFlag")
      },
      success(res){
        var arrays = res.data;
        var home = wx.getStorageSync("home")
        var newArrays = [];
        arrays.forEach(function (item, index) {
          
          if (home.communityId == item.communityId) {
            item.isSelected = 1
            newArrays.push(item)
          }else{
            item.isSelected = 0
            newArrays.push(item)
          }
          
        })
        console.log(newArrays)
        that.setData({
          homeArray: newArrays,
        })
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

  }
})