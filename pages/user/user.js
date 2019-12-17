// pages/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    owner:wx.getStorageSync("owner"),
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    funList: [{
        id: 0,
        funName: "业主认证",
        image: "images/authentication.png",
        url: "myapprove/myapprove"
      },
      {
        id: 1,
        funName: "我的消息",
        image: "images/msg.png",
        url: "mymessage/mymessage"
      },
      {
        id: 2,
        funName: "发起活动",
        image: "images/sponsor.png",
        url: "activity/activity"
      },
      {
        id: 3,
        funName: "我的发起",
        image: "images/order.png",
        url: "initiate/initiate"
      }
    ]
  },
  /**
   * 更换头像
   */
  changeAvatar(){
    wx.navigateTo({
      url: '/pages/user/avatar/avatar',
    })
  },
  fun(e) {
    console.log(e.currentTarget.dataset.index)
    var index = e.currentTarget.dataset.index;

    var to = this.data.funList[index].url;
    // console.log(url);
    wx.navigateTo({
      url: to
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //检查用户登陆态是否过期
    wx.checkSession({
      success: function() {
        //未过期
        wx.getSetting({
          success: function(res) {
            if (res.authSetting['scope.userInfo']) {
              wx.getUserInfo({
                success: function(res) {
                  // that.queryUsreInfo();
                  var userInfo = wx.getStorageSync("userInfo");
                  if (userInfo) {
                    that.setData({
                      userInfo: userInfo,
                      hasUserInfo: true
                    });
                  }
                }
              });
            }
          }
        })
      },
      fail: function() {
        //过期
        //移除缓存中的信息
        wx.removeStorageSync("userInfo");
        wx.removeStorageSync("loginFlag");
        //将页面的值重置
        that.setData({
          userInfo: {},
          hasUserInfo: false
        });
      }
    })
  },


  getUserInfo: function(ee) {
    console.log(ee);
    if (ee.detail.userInfo) {
      var that = this;
      wx.login({
        success: function(res) {
          console.log();

          //发送请求
          wx.request({
            url: 'http://localhost:8081/ehome/user/userLogin',
            data: {
              code: res.code, //临时登录凭证
              rawData: ee.detail.rawData, //用户非敏感信息
              signature: ee.detail.signature, //签名
              encrypteData: ee.detail.encryptedData, //用户敏感信息
              iv: ee.detail.iv //解密算法的向量
            },
            success: function(e) {
              var data = e.data;
              if (data.status == "1") {
                //数据放入缓存
                wx.setStorageSync('userInfo', ee.detail.userInfo);
                wx.setStorageSync('loginFlag', data.userId);
                wx.setStorageSync("owner", data.owner);
                that.setData({
                  userInfo: ee.detail.userInfo,
                  hasUserInfo: true,
                  owner:data.owner,
                });
              }
            }
          })
        }
      })

    }

  },
  getUserNewInfo(){
    var that = this;
    wx.request({
      url: 'http://localhost:8081/ehome/user/getUserNewInfo',
      data:{
        "ownerId":wx.getStorageSync("loginFlag")
      },
      success(res){
        // console.log(res.data)
        if(res.data.status==0){
          wx.setStorageSync("owner", res.data.data.owner)
          that.setData({
            owner: res.data.data.owner
          })
        }
      }
    })
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
    this.getUserNewInfo()
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

  //一键报警逻辑
  callThePolice() {
    wx.showToast({
      title: '功能正在开发',
      icon: 'none'
    })
  }
})