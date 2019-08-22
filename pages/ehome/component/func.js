// pages/ehome/component/func.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showFunData:{
      type:Array,
      value:null,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    fun1:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready:function(){
    var dt = this.data.showFunData;
    if (dt != null){
      this.setData({
        fun1: dt
      });
    }
  }
})
