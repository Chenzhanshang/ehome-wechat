// pages/ehome/ehome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../swiperImg/1.jpg',
      '../swiperImg/2.jpg',
      '../swiperImg/3.jpg',
    ],
    fun:[
      [
        { id :1, funName: "家政", image: "/pages/ehome/images/homemaking.png" }, 
        { id: 2,funName: "宠物", image: "/pages/ehome/images/pet.png" }
      ],
      [
        { id: 6,funName: "拼团", image: "/pages/ehome/images/group.png" },
        { id: 7,funName: "便利", image: "/pages/ehome/images/convenient.png" },
        { id: 8,funName: "特产", image: "/pages/ehome/images/specialty.png" }
      ],
      [
        { id: 9, funName: "安防", image: "/pages/ehome/images/security.png" },
        { id: 10, funName: "健康", image: "/pages/ehome/images/health.png" }
      ],
      [
      { id: 3, funName: "母婴", image: "/pages/ehome/images/baby.png" },
      { id: 4, funName: "教育", image: "/pages/ehome/images/education.png" },
      { id: 5, funName: "送水", image: "/pages/ehome/images/water.png" }
      ]
    ],
    selected:["red","","",""],
    flag:0
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
  funClick(data){
    var c = parseInt(data.currentTarget.dataset.flag);
    // var f = this.data.fun[c];
    this.setData({
      flag: c
    });
    for(var i = 0;i<this.data.selected.length;i++){
    var setdt = "selected["+i+"]";
        if(i == this.data.flag){
          this.setData({
            [setdt]: "red"
          });
        }
        else{
          this.setData({
            [setdt]: ""
          });
        }
    }

    console.log(this.data.selected);
    this.onLoad();
  }
})