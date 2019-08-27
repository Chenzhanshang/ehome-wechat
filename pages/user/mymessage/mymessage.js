// pages/user/mymessage/mymessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:[
      { id: 0, title: "报修结果",content:"报修成功,维修师傅正在赶来的路上", date: "2019-08-26 12:00:00", isread:false,status:"unselected"},
      { id: 1, title: "关于小区停水通知", date: "2019-08-26 10:55:30", isread: true, status: "unselected"},
      { id: 2, title: "创建业委会投票结果", date: "2019-08-27 00:00:00", isread: false, status: "unselected"}
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
  //标记已读(移除小红点)
  reading(data){
    var index = data.currentTarget.dataset.index;
    var str = "msg[" + index + "].isread";

    this.setData({
      [str]:true
    });
  },
  delete(index){
    var arr = this.data.msg;
    arr.splice(index, 1);
    // var newmsg =  ;
    this.setData({
      msg: arr
    });
  },
  slideButtonTap(e) {
    if (e.detail.index == 0){

    }
    else if (e.detail.index == 1){
      this.delete(e.currentTarget.dataset.id);
    }
  }

})