// pages/user/activity/activity.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        registrationDate:"",
        startDate:"",
        endDate:"",
        gatherAddress:"",
        activityAddress:"",
        content:"",
        contentLength:0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var timetemp = Date.parse(new Date());
        var date = new Date(timetemp);
        //获取 年月日
        var y = date.getFullYear();
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); 
        var str = `${y}-${M}-${d}`;
        this.setData({
            registrationDate: str,
            startDate: str,
            endDate: str
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
    //报名截止时间
    bindRegistrationDate(e){
        this.setData({
            registrationDate: e.detail.value
        })
    },
    //活动开始日期
    bindStartDate(e){
        this.setData({
            startDate: e.detail.value
        })
    },
    //活动结束日期
    bindEndDate(e) {
        this.setData({
            endDate: e.detail.value
        })
    },
    //输入活动内容
    contentInput(e){
        this.setData({
            content:e.detail.value,
            contentLength: e.detail.cursor
        });
    },
    //设置集合地点
    selectedGatherAddress(){
        wx.chooseLocation({
            success: (res) => {
                this.setData({
                    gatherAddress: res.address
                });
            },
        });
    },
    //设置活动地点
    selectedActivityAddress(){
        wx.chooseLocation({
            success:  (res) => {
                this.setData({
                    activityAddress: res.address
                });
            },
        });
    },
    submit(){
        console.log("提交!!!");
    }
})