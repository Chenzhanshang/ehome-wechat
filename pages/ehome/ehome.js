// pages/ehome/ehome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    maskFlag:false,
    imgUrls: [
      '../swiperImg/1.jpg',
      '../swiperImg/2.jpg',
      '../swiperImg/3.jpg',
    ],
    fun:[
        { id: 0, flag: true, classify: "家政", 
          fun: [
              { funName: "保姆", image: "/pages/ehome/images/nanny.png" },
              { funName: "保洁", image: "/pages/ehome/images/cleankeeping.png" },
              { funName: "送水", image: "/pages/ehome/images/watercarriage.png" },
              { funName: "家电清洁", image: "/pages/ehome/images/HomeAppliancesClean.png" },
              { funName: "搬家", image: "/pages/ehome/images/moveHouse.png" }
            ]
        }, 
        { id: 1, flag: true, classify: "教育", 
          fun: [
              { funName: "艺术", image: "/pages/ehome/images/art.png" },
              { funName: "英语", image: "/pages/ehome/images/English.png" },
              { funName: "夏令营", image: "/pages/ehome/images/summerCamp.png" }
            ]},
        { id: 2, flag: true, classify: "维修", 
        fun: [
              { funName: "门锁", image: "/pages/ehome/images/lock.png" },
              { funName: "水龙头", image: "/pages/ehome/images/faucet.png" },
              { funName: "下水道", image: "/pages/ehome/images/pipeline.png" },
              { funName: "房屋", image: "/pages/ehome/images/housing.png" }
            ]
            },
        { id: 3, flag: true, classify: "医疗", 
          fun: [
                { funName: "养老机构", image: "/pages/ehome/images/old.png" },
                { funName: "社区医院", image: "/pages/ehome/images/hospital.png" }
              ] 
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pass:this.data.fun[0]
    });
    this.setData({
      search: this.search.bind(this)
    })
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
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
  enter(){
    wx.showToast({
      title: '正在开发中',
      icon: 'none'
    })
  },
  showInput: function () {
    console.log("showInput");
    this.setData({
      inputShowed: true,
      maskFlag: true
    });
  },
  hideInput: function () {
    console.log("hideInput");
    this.setData({
      inputVal: "",
      inputShowed: false,
      maskFlag: false
    });
  },
  clearInput: function () {
    console.log("clearInput");
    this.setData({
      inputVal: "",
      maskFlag: false
    });
  },
  inputTyping: function (e) {
    console.log("inputTyping");
    this.setData({
      inputVal: e.detail.value,
      maskFlag: true
    });
  },
  toFair(){
      wx.showModal({
          title: '提示',
          content: '要跳转到xxx',
          success:(res) =>{
              if(res.confirm){
                  console.log("跳转到其他小程序");
              }else{
                  console.log("取消跳转");
              }
          }
      })
  }
})