// pages/committee/create/create.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  downloadfile1(){
    wx.showModal({
      title: '提示',
      content: '是否要下载？',
      success(res){
        if (res.confirm) {
          console.log('用户点击确定')
          wx.downloadFile({
            url: app.globalData.url +"/file/ehome数据库表.xls",
            success(res) {
              console.log(res)

              // 打开文件
              var filePath = res.tempFilePath
              wx.openDocument({
                filePath: filePath,
                success: function (res) {
                  console.log(res)
                  console.log('打开文档成功')
                }
              })
            }
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
  downloadfile2() {
    wx.showModal({
      title: '提示',
      content: '是否要下载？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.downloadFile({
            url: app.globalData.url +"/file/ehome数据库表.xls",
            success(res) {
              console.log(res)

              // 打开文件
              var filePath = res.tempFilePath
              wx.openDocument({
                filePath: filePath,
                success: function (res) {
                  console.log(res)
                  console.log('打开文档成功')
                }
              })
            }
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  downloadfile3() {
    wx.showModal({
      title: '提示',
      content: '是否要下载？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.downloadFile({
            url: app.globalData.url +"/file/ehome数据库表.xls",
            success(res) {
              console.log(res)

              // 打开文件
              var filePath = res.tempFilePath
              wx.openDocument({
                filePath: filePath,
                success: function (res) {
                  console.log(res)
                  console.log('打开文档成功')
                }
              })
            }
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  downloadfile4() {
    wx.showModal({
      title: '提示',
      content: '是否要下载？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.downloadFile({
            url: app.globalData.url +"/file/ehome数据库表.xls",
            success(res) {
              console.log(res)

              // 打开文件
              var filePath = res.tempFilePath
              wx.openDocument({
                filePath: filePath,
                success: function (res) {
                  console.log(res)
                  console.log('打开文档成功')
                }
              })
            }
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  next(){
    wx.navigateTo({
      url: '../submit/submit',
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