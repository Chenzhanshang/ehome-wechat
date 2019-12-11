// pages/committee/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filePath:null,
    filename:'',
    filesize:'',

  },
  getfile() {
    var that = this;
    wx.chooseMessageFile({
      count: 10,
      type: 'all',
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        const tempFilePaths = res.tempFiles[0]
        that.setData({
          filePath: tempFilePaths,
          filename: tempFilePaths.name,
          filesize: tempFilePaths.size,
        })
      }
    })
  },
  submit(){
    console.log(this.data.filePath)
    var home =wx.getStorageSync("home")
    wx.uploadFile({
      url: 'http://localhost:8081/ehome/uploadApplyGroup',
      filePath: this.data.filePath.path,
      name: 'file',
      formData:{
        "ownerId":wx.getStorageSync("loginFlag"),
        "filename":this.data.filename,
        "communityId":home.communityId,
      },
      success(res){
        wx.switchTab({
          url: '/pages/committee/committee',
        })
        var data = JSON.parse(res.data)
        console.log(res)
        if (data.status == "success"){
          wx.showToast({
            title: data.msg,
          })
        }
      }
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