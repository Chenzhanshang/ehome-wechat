// pages/vote/votedetails/votedetalis.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    approvalHeight: 0,
    abstentionHeight: 0,
    opposeHeight: 0,
    issueList: [],
    issue:null,
    community:null,
    flag:0,
  },
  approvalTap(e) {
    var that = this;
    if(that.data.flag == 0){
      wx.showModal({
        title: '提示',
        content: '您确定要投票吗？',
        success(res) {
          if (res.confirm) {
            wx.request({
              url: app.globalData.url + '/issue/vote',
              method: "post",
              data: {
                'issueId': that.data.issue.issueId,
                'ownerId': wx.getStorageSync("loginFlag"),
                'voteFlag': 1
              },
              success(res) {
                
                if (res.data.status == '0') {
                  wx.navigateTo({
                    url: '../vote/vote',
                  })
                  wx.showToast({
                    title: res.data.msg,
                  })
                  wx.setStorageSync("issueVoteFlag" + that.data.issue.issueId, 1)
                  var h = that.data.approvalHeight;
                  h++;
                  that.setData({
                    approvalHeight: h,
                    flag:1
                  })
                }

              }
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else{
      wx.showToast({
        title: '您已经投过票',
      })
    }
    
    

    

  },

  abstentionTap(e) {
    var that = this;
    if(that.data.flag == 0){
      wx.showModal({
        title: '提示',
        content: '您确定要投票吗？',
        success(res) {
          if (res.confirm) {
            wx.request({
              url: app.globalData.url + '/issue/vote',
              method: "post",
              data: {
                'issueId': that.data.issue.issueId,
                'ownerId': wx.getStorageSync("loginFlag"),
                'voteFlag': 2
              },
              success(res) {
                
                if (res.data.status == '0') {
                  wx.showToast({
                    title: res.data.msg,
                  })
                  wx.setStorageSync("issueVoteFlag" + that.data.issue.issueId, 1)

                  var h = that.data.abstentionHeight;
                  h++;

                  that.setData({
                    abstentionHeight: h,
                    flag:1
                  })
                }

              }
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else{
      wx.showToast({
        title: '您已经投过票',
      })
    }
    
    
    

  },
  opposeTap(e) {
    var that = this;
    if(that.data.flag == 0){
      wx.showModal({
        title: '提示',
        content: '您确定要投票吗？',
        success(res) {
          if (res.confirm) {
            wx.request({
              url: app.globalData.url + '/issue/vote',
              method: "post",
              data: {
                'issueId': that.data.issue.issueId,
                'ownerId': wx.getStorageSync("loginFlag"),
                'voteFlag': 3
              },
              success(res) {
                
                if (res.data.status == '0') {
                  wx.showToast({
                    title: res.data.msg,
                  })
                  wx.setStorageSync("issueVoteFlag" + that.data.issue.issueId, 1)
                  var h = that.data.opposeHeight;
                  h++;

                  that.setData({
                    opposeHeight: h,
                    flag:1
                  })
                }

              }
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else{
      wx.showToast({
        title: '您已经投过票',
      })
    }
    
    
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var list = wx.getStorageSync("issueList")
    this.setData({
      issueList: list,
      community:wx.getStorageSync("home")
    })
    var issueList = this.data.issueList
    const eventChannel = this.getOpenerEventChannel()
    var that = this;
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      issueList.forEach((item, index )=> {
        if(item.issueId == data.data){
          that.setData({
            issue:item,
            approvalHeight: item.issueAgree,
            abstentionHeight: item.issueWaiver,
            opposeHeight: item.issueOppose,
          })
        
        }
      })
    })
    //初始化缓存
    var id = that.data.issue.issueId
    if (wx.getStorageSync("issueVoteFlag" + id) == 0) {
      wx.setStorageSync("issueVoteFlag" + id, 0)
      that.setData({
        flag: wx.getStorageSync("issueVoteFlag" + id)
      })

    } else {
      that.setData({
        flag: wx.getStorageSync("issueVoteFlag" + id)
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