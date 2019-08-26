// pages/user/approvehome/approvehome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeArrays: [
      {
        id: 0,
        xqname: "小康小区",
        danyuanlou: ["1栋", "2栋", "3栋", ],
        home: ["101", "102", "201", "202", "301", "302", "401", "402"]
      },
      {
        id: 1,
        xqname: "复兴小区",
        danyuanlou: ["1栋", "2栋", "3栋",],
        home: ["101", "102", "201", "202", "301", "302", "401", "402"]
      },
    ],
    xiaoquName:[],

   

  
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    var that = this;
    var arr = [];
    this.data.homeArrays.forEach(function(item,index){
      console.log(item)
      arr.push(that.data.homeArrays[index].xqname); 
    });
    that.setData({
      xiaoquName: arr,
    })
    console.log(that.data.xiaoquName)
    
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