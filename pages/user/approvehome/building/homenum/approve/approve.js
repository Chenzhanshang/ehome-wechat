// pages/user/approvehome/building/homenum/approve/approve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    community: null, //小区
    house: null, //楼栋
    room: null, //房间
    xiaoquid: null, //小区号
    buildingid: null, //栋号
    buildNumId: null, //房号
    name: null, //姓名
    phone: null, //手机号码
    idcard: null, //身份证号
    flag: false,
    urlList:[],
    files: [{
      url: ''
    }, {
      loading: true
    }, {
      error: true
    }]
  },

  /**
   * 名字输入框
   */
  inputName(res) {
    console.log(res.detail.value)
    var name = res.detail.value;
    this.setData({
      name: name,
    })
  },
  /**
   * 电话输入框
   */
  inputPhoneNumber(res) {
    console.log(res.detail.value)
    var phone = res.detail.value;
    this.setData({
      phone: phone,
    })
  },
  /**
   * 身份证输入框
   */
  inputIDNumber(res) {
    console.log(res.detail.value)
    var idcard = res.detail.value;
    this.setData({
      idcard: idcard,
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log("小区的id是:" + data.xiaoquid)
      console.log("建筑物的id是:" + data.buildingid)
      console.log("房号的id是:" + data.buildNumId)
      that.setData({
        buildingid: data.buildingid,
        xiaoquid: data.xiaoquid,
        buildNumId: data.buildNumId
      })
    })
    var communityList = wx.getStorageSync("communityList")
    var houseList = wx.getStorageSync("houseList")
    var roomList = wx.getStorageSync("roomList")
    this.setData({
      community: communityList[this.data.xiaoquid - 1],
      house: houseList[this.data.buildingid - 1],
      room: roomList[this.data.buildNumId - 1]
    })
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    })
    console.log(this.data.community)
  },
  /**
   * 提交表单
   */
  submitForm() {
    if (this.data.name != null && this.data.name != '' && this.data.idcard != null && this.data.idcard != '' && this.data.phone != null && this.data.phone != '') {
      if (this.data.urlList.length >= 4){
        console.log(this.data.urlList.length)
        wx.request({
          url: 'http://localhost:8081/ehome/apply/applyMessage',
          method: "get",
          data: {
            "weixin": wx.getStorageSync("loginFlag"),
            "communityId": this.data.xiaoquid,
            "houseId": this.data.buildingid,
            "roomId": this.data.buildNumId,
            "phone": this.data.phone,
            "name": this.data.name,
            "idCard": this.data.idcard,
          },
          success(res) {
            console.log(res.data)
            if(res.data.status == "success"){
              wx.switchTab({
                url: '/pages/user/user',
              })
              wx.showToast({
                title: res.data.msg,
                duration: 2000,
                
              })
            }else{
              wx.showToast({
                title: res.data.msg,
                icon:'none',
                duration:2000,
              })
            }
           
          }
        })
      }else{
        console.log(this.data.urlList.length)
        wx.showToast({
          title: '请将必要的照片上传',
          icon: 'none',
          duration: 2000,
        })
      }
      
    }else{
      console.log(this.data.urlList.length)
      wx.showToast({
        title: '请填完必填内容',
        icon:'none',
        duration: 2000,
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

  },
  chooseImage: function(e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        console.log(res)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })

  },
  previewImage: function(e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  selectFile(files) {
    console.log('files', files)
    // 返回false可以阻止某次文件上传
  },
  
  uplaodFile(files) {
    console.log('upload files', files)
    // //将文件上传到服务器
    console.log("文件上传")
    this.data.urlList.push(files.tempFilePaths[0])
     
    // 文件上传的函数，返回一个promise   
    return new Promise((resolve, reject) => {
      const uploadTask = wx.uploadFile({
        url: 'http://localhost:8081/ehome/uploadFile',
        filePath: files.tempFilePaths[0],
        name: 'file',
        success(res) {
          const url = JSON.parse(res.data)
          // console.log(url)
          // console.log(files.tempFilePaths)
          resolve({
            urls: url.urls
          })
        }
      })
      uploadTask.onProgressUpdate((res) => {
        console.log('上传进度', res.progress)
        console.log('已经上传的数据长度', res.totalBytesSent)
        console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
      })

      setTimeout(() => {
        reject('some error')
      }, 2000)
    })
  },
  resolve() {

  },
  uploadError(e) {
    console.log('upload error', e.detail)
  },
  uploadSuccess(e) {
    console.log('upload success', e.detail)
  },

})