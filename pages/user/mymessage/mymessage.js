// pages/user/mymessage/mymessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:[
      { id: 0, title: "报修结果",content:"报修成功,维修师傅正在赶来的路上", date: "2019-08-26 12:00:00", isread:false},
      { id: 1, title: "关于小区停水通知", content: "明天8点停水", date: "2019-08-26 10:55:30", isread: false, status: "unselected"},
      { id: 2, title: "创建业委会投票结果", content: "会长:张某某,副会长:王某某...", date: "2019-08-27 00:00:00", isread: false, status: "unselected"}
    ],
    slideButtons: [{
      text: '已阅'
    }, {
      type: 'warn',
      text: '删除'
    }],
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

  },
  //标记已读
  reading(id){
    var arr = this.data.msg;
    arr.forEach((item, i) => {
      if (item.id == id) {
        var str = "msg[" + i + "].isread";
        this.setData({
          [str]: true
        });

      }
    });

    
  },
  //删除
  deleted(id){
    var arr = this.data.msg;
    arr.forEach((item,i) =>{
      if (item.id == id){
        arr.splice(i, 1);
      }
    });
    
    //设置值
    this.setData({
      msg: arr
    });
  },
  slideButtonTap(e) {
    if (e.detail.index == 0){
      //已读
      this.reading(e.currentTarget.dataset.id);
    }
    else if (e.detail.index == 1){
      //删除
      this.deleted(e.currentTarget.dataset.id);
    }
  },
  //跳转至详情页
  toDetails(e){
    var id = e.currentTarget.dataset.id;
    
    //获取索引
    var arr = this.data.msg;

    arr.forEach((item, i) => {
      if (item.id == id) {
        wx.navigateTo({
          url: '/pages/user/mymessage/messagedetails/messagedetails',
          success: (res) => {
            res.eventChannel.emit('data', item);
          }
        })
      }
    });

    //已读
    this.reading(id);

  }

})