// pages/main/main.js

//引入SDK核心类
var QQMapWX = require('../lib/qqmap-wx-jssdk.js');
var qqmapsdk;
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province:'',//省份
    city: '', //城市
    comunity: '', //小区名字
    latitude: null, //纬度
    longitude: null, //精度
    imgUrls: [
      '../swiperImg/1.jpg',
      '../swiperImg/2.jpg',
      '../swiperImg/3.jpg',
    ],
    topFunArr: [{
        id: 0,
        url: "../images/weixiu.png",
        title: '报修'
      },
      {
        id: 1,
        url: "../images/toupiao.png",
        title: '议题投票'
      },
      {
        id: 2,
        url: "../images/car.png",
        title: '组建业委会'
      },
      {
        id: 3,
        url: "../images/tousu.png",
        title: '建议投诉'
      },

    ],
    botFunArr: [{
        id: 4,
        url: "../images/wuyefei.png",
        title: '便民支付'
      },
      {
        id: 5,
        url: "../images/shequ.png",
        title: '房产租售'
      },
      {
        id: 6,
        url: "../images/qunliao.png",
        title: '业主社群'
      },
      {
        id: 7,
        url: "../images/more.png",
        title: '更多'
      },
    ],
    notice:{},
  },
  tapfun(e) {
    var fun;
    if (e.currentTarget.dataset.id <= 3) {
      fun = this.data.topFunArr[e.currentTarget.dataset.id]
    } else if (e.currentTarget.dataset.id > 3) {
      fun = this.data.botFunArr[e.currentTarget.dataset.id - 4]
    }
    console.log(fun.title)
    wx.showToast({
      title: fun.title + ' 正在开发中',
      icon: "none",
    })
    if (fun.id == 0) {
      wx.navigateTo({
        url: '../repair/repair',
      })
    } else if (fun.id == 1) {
      wx.navigateTo({
        url: '../vote/vote',
      })
    } else if (fun.id == 2) {
      wx.navigateTo({
        url: '/pages/committee/create/create',
      })
    } else if (fun.id == 3) {
      wx.navigateTo({
        url: '../advise/advise',
      })
    } else if (fun.id == 4) {
      wx.navigateTo({
        url: '../pay/pay',
      })
    } else if (fun.id == 6) {
      wx.navigateTo({
        url: './group/group',
      })
    }
  },
  /**
   * 选择位置
   */
  chooseAddr() {
    var thar = this
    wx.chooseLocation({
      success: function(res) {
        thar.getLocal(res.latitude, res.longitude)
      },
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'L4NBZ-TJNC4-EG7UE-D3LGF-PZUXK-VRB4A'
    });
    var home = wx.getStorageSync("home")
    //获取公告列表
    wx.request({
      url: app.globalData.url+'/ten/getNoticeList',
      data:{
        "communityId":home.communityId
      },
      success(res){
        console.log(res)
        let noticeList = res.data.data.noticeList
        wx.setStorageSync("noticeList", noticeList)
        that.setData({
          notice:noticeList[noticeList.length-1]
        })
      

      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let vm = this;
    vm.getUserLocation();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      community: wx.getStorageSync("home")
    })
    var that = this;
    var home = wx.getStorageSync("home")
    //获取公告列表
    wx.request({
      url: app.globalData.url + '/ten/getNoticeList',
      data: {
        "communityId": home.communityId
      },
      success(res) {
        console.log(res)
        let noticeList = res.data.data.noticeList
        wx.setStorageSync("noticeList", noticeList)
        that.setData({
          notice: noticeList[noticeList.length - 1]
        })
        

      }
    })
    
  },
  getUserLocation: function () {
    let vm = this;
    wx.getSetting({
      success: (res) => {
        // console.log(JSON.stringify(res))
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      vm.getLocation();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //调用wx.getLocation的API
          vm.getLocation();
        }
        else {
          //调用wx.getLocation的API
          vm.getLocation();
        }
      }
    })
  },
  // 微信获得经纬度
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //console.log(JSON.stringify(res))
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        vm.getLocal(latitude, longitude)
      },
      fail: function (res) {
        // console.log('fail' + JSON.stringify(res))
      }
    })
  },
  // 获取当前地理位置
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        // console.log(JSON.stringify(res));
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        vm.setData({
          province: province,
          city: city,
          latitude: latitude,
          longitude: longitude
        })
        //缓存所在城市信息
        wx.setStorageSync("city", city)

      },
      fail: function (res) {
        // console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
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
  //首页公告被点击触发事件
  noticeClick() {
    wx.navigateTo({
      url: 'notice/notice'
    })
  },
  //首页活动被点击
  activityClick() {
    wx.navigateTo({
      url: 'activity/activity'
    })
  }
})