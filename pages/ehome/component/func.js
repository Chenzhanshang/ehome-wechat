// pages/ehome/component/func.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Array,
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：      '_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
        var dt = newVal;
        if (dt != null) {
          this.setData({
            fun1: dt
          });
        }
      }
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
  attached(){
    // console.log("attached" + this.properties.show);
    var dt = this.properties.show;
    if (dt != null){
      this.setData({
        fun1: dt
      });
    }
  }
})
