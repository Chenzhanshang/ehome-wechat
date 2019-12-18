// pages/committee/candidate/candidate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boxNum: 0, //用于记录候选人数
    candidateList: [],
    flag: 0,
  },
  /**
   * 投票按钮
   */
  vote(e) {
    var that = this;
    console.log(e.target.dataset.id)
    var id = e.target.dataset.id
    if (that.data.flag == 0) {
      wx.showModal({
        title: '提示',
        content: '确定要投票吗？',
        success(res) {
          if (res.confirm) {
            console.log("确定")
            // 发送请求
            wx.request({
              url: 'http://localhost:8081/ehome/vote/voteCandidate',
              data: {
                "candidateId": id,
                "ownerId": wx.getStorageSync("loginFlag")
              },
              success(res) {
                console.log(res)
                that.setData({
                  flag: 1,
                })
                wx.setStorageSync("voteFlag", 1)
                that.onLoad()
              }
            })

          } else {

          }
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '您已经投过票了',
        showCancel: false
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //通过网络获取候选人列表
    var that = this;
    var community = wx.getStorageSync("home")
    var communityId = community.communityId;
    wx.request({
      url: 'http://localhost:8081/ehome/vote/candidateList/' + communityId,
      success(res) {
        var list = res.data.data.candidateList
        console.log(list)
        that.setData({
          candidateList: list,
          boxNum: list.length
        })
      }
    })
    if (wx.getStorageSync("voteFlag") == 0)  {
      wx.setStorageSync("voteFlag", 0)
      that.setData({
        flag: wx.getStorageSync("voteFlag")
      })

    } else {
      that.setData({
        flag: wx.getStorageSync("voteFlag")
      })
    }


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