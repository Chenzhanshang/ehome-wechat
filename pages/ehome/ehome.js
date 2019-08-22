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
        { 
          id: 0, 
          flag: true,
          classify: "生鲜", 
          fun:[
                { funName: "水产", image:"/pages/ehome/images/aquatic.png"},
                { funName: "蔬菜", image: "/pages/ehome/images/vegetables.png" },
                { funName: "水果", image: "/pages/ehome/images/fruit.png" },
                { funName: "肉禽", image: "/pages/ehome/images/chicken.png" },
                { funName: "蛋", image: "/pages/ehome/images/egg.png" }
              ]
        }, 
        { 
          id: 1, 
          flag: true, 
          classify: "饮品", 
          fun: [
                  { funName: "水", image: "/pages/ehome/images/water.png" },
                  { funName: "茶", image: "/pages/ehome/images/tea.png" },
                  { funName: "酒", image: "/pages/ehome/images/wine.png" },
                  { funName: "牛奶", image: "/pages/ehome/images/milk.png" }
               ]
        },
        { 
          id: 2, 
          flag: true,
          classify: "家电", 
          fun: [
            { funName: "大家电", image: "/pages/ehome/images/bigelectrical.png" },
            { funName: "小家电", image: "/pages/ehome/images/smallelectrical.png" },
                { funName: "手机", image: "/pages/ehome/images/phone.png" },
                { funName: "数码", image: "/pages/ehome/images/digital.png" },
              ]
        },
        { 
          id: 3, 
          flag: true, 
          classify: "家居", 
          fun: [
                  { funName: "智能设备", image: "/pages/ehome/images/smart.png" },
                  { funName: "家具", image: "/pages/ehome/images/furniture.png" },
                  { funName: "清洁", image: "/pages/ehome/images/clean.png" },
                  { funName: "湿巾", image: "/pages/ehome/images/tissue.png" },
                  { funName: "建材", image: "/pages/ehome/images/Building.png" }
              ]
           },
        { 
          id: 4, 
          flag: true, 
          classify: "母婴", 
          fun: [
                { funName: "玩具", image: "/pages/ehome/images/toy.png" },
                { funName: "居家服饰", image: "/pages/ehome/images/dress.png" },
                { funName: "童车", image: "/pages/ehome/images/babycar.png" },
                { funName: "洗护", image: "/pages/ehome/images/protect.png" }
              ]
        },
        { id: 5, flag: true, classify: "宠物", 
        fun: [
              { funName: "零食", image: "/pages/ehome/images/melonseeds.png" },
              { funName: "玩具", image: "/pages/ehome/images/pettoy.png" },
              { funName: "日用", image: "/pages/ehome/images/catlitter.png" },
              { funName: "粮食", image: "/pages/ehome/images/dogfood.png" }
            ]
         },
        { id: 6, flag: true, classify: "保健", 
          fun: 
            [
              { funName: "营养品", image: "/pages/ehome/images/nutrition.png" },
              { funName: "护理", image: "/pages/ehome/images/nursing.png" },
              { funName: "器械", image: "/pages/ehome/images/instrument.png" },
              { funName: "计生", image: "/pages/ehome/images/familyplanning.png" }
            ] 
          }
      ],
      [
        { id: 0, flag: true, classify: "家政", fun: ["保姆", "保洁", "送水", "家电清洁", "搬家"], image: "/pages/ehome/images/homemaking.png" }, 
        { id: 1, flag: true, classify: "教育", fun: ["艺术", "英语", "夏令营"], image: "/pages/ehome/images/education.png" },
        { id: 2, flag: true, classify: "维修", fun: ["门锁", "水龙头", "下水道", "房屋"], image: "/pages/ehome/images/maintain.png" },
        { id: 3, flag: true, classify: "医疗", fun: ["养老机构", "社区医院"], image: "/pages/ehome/images/medical.png" }
      ],
      [
        { id: 0, flag: false, classify: "西瓜", fun: ["30/斤","两人拼购价:10/斤","距拼还剩:24天"], image: "/pages/ehome/images/watermelon.png" },
        { id: 1, flag: false, classify: "家电", fun: ["1688/台", "五人拼购价:1388/台", "距拼还剩:22天"], image: "/pages/ehome/images/television.png" }
      ],
      [
        { id: 0, flag: true,classify: "特产", fun: ["业主特产"], image: "/pages/ehome/images/specialty.png" }
      ]
    ],
    selected: ["selected","","",""],
    flag:0,
    pass:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pass:this.data.fun[0]
    });
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
    //获取点击的位置
    var c = parseInt(data.currentTarget.dataset.flag);

    for(var i = 0;i<this.data.selected.length;i++){
    var setdt = "selected["+i+"]";
      if (i == c){
          //设置显示样式
          this.setData({
            [setdt]: "selected"
          });
        }
        else{
          this.setData({
            [setdt]: ""
          });
        }
    }
    this.setData({
      pass: this.data.fun[c]
    });

    // console.log(this.data.selected);
    // this.onLoad();
  }
})