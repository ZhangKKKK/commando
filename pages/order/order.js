// pages/order/order.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderData:[],
    total:0,
    address:false,
    adderssInfo:{}
  },
//   收货地址
  writeAddress:function(){
    wx.navigateTo({
        url: '../../pages/address/address',
    })
  },
//   提交订单
    subOrder:function(){
        var that = this;
        if(this.data.address){
            wx.showModal({
                title:'提交订单',
                content: '商品总价:￥' + that.data.total,
                success:function(){
                    if (!app.globalData.orderInfo) {
                        app.globalData.orderInfo = that.data.orderData
                        console.log(app.globalData.orderInfo)
                    } else {
                        that.data.orderData.forEach(v => {
                            app.globalData.orderInfo.push(v)
                        })
                    }
                    wx.navigateTo({
                        url: '../../pages/allOrder/allOrder',
                    })
                }
            })
        }else{
            wx.showToast({
                title: '请先填写地址',
                icon: 'none'
            })
        }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      var order = this.data.orderData;
      if(typeof options == "object"){
          order.push(options)
      }else{
        order = options
      }
    var total = this.data.total
    order.forEach(v=>{
        total+=parseInt(v.price)
    })
    this.setData({
        orderData: order,
        total:total
    })
    // 收货地址
    wx.getStorage({
        key: 'address',
        success: function(res) {
            if (res.data) {
                that.setData({
                    address: true,
                    adderssInfo:res.data
                })
            }
        },
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
  onShow: function (e) {
      var that = this;
      wx.getStorage({
          key: 'address',
          success: function (res) {
              if(res.data){
                  that.setData({
                      address:true,
                      adderssInfo:res.data
                  })
              }
          },
      })
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
  
  }
})