// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      '../swiperImg/1.jpg',
      '../swiperImg/2.jpg',
      '../swiperImg/3.jpg',
    ],
    topFunArr: [
      { id: 0, url: "../images/weixiu.png", title: '报修' },
      { id: 1, url: "../images/toupiao.png", title: '议题投票' },
      { id: 2, url: "../images/car.png", title: '组建业委会'},
      { id: 3, url: "../images/tousu.png", title: '建议投诉' },
      
    ],
    botFunArr:[
      { id: 4, url: "../images/wuyefei.png", title: '便民支付' },
      { id: 5, url: "../images/shequ.png", title: '房产租售' },
      { id: 6, url: "../images/qunliao.png", title: '业主社群' },
      { id: 7, url: "../images/more.png", title: '更多' },
    ],
  },
  tapfun(e){
    var fun;
    if (e.currentTarget.dataset.id<=3){
       fun = this.data.topFunArr[e.currentTarget.dataset.id]
    } else if (e.currentTarget.dataset.id > 3){
      fun = this.data.botFunArr[e.currentTarget.dataset.id-4]
    }
    console.log(fun.title)
    wx.showToast({
      title: fun.title + ' 正在开发中',
      icon: "none",
    })
    if(fun.id==0){
      wx.navigateTo({
        url: '../repair/repair',
      })
    }else if(fun.id==1){
      wx.navigateTo({
        url: '../vote/vote',
      })
    }else if(fun.id==2){

    }else if(fun.id==3){
      wx.navigateTo({
        url: '../advise/advise',
      })
    }else if(fun.id==4){
      wx.navigateTo({
        url: '../pay/pay',
      })
    }else if(fun.id==6){
      wx.navigateTo({
        url: './group/group',
      })
    }
  },
  chooseAddr(){
    wx.showToast({
      title: '该功能正在开发中',
      icon: "none",
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

  },
  //首页公告被点击触发事件
  noticeClick(){
    wx.navigateTo({
      url: 'notice/notice'
    })
  },
  //首页活动被点击
  activityClick(){
    wx.navigateTo({
      url: 'activity/activity'
    })
  }
})