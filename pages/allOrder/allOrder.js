// pages/allOrder/allOrder.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      orderList: []
  },
  goIndex(){
      wx.switchTab({
          url: '../index/index'
      })
  },
    cancal(e){
        var that = this,
            index = e.currentTarget.dataset.index,
            orderList = this.data.orderList;
        wx.showModal({
            title: '取消订单',
            content: '确定取消此订单吗?',
            success:function(){
                orderList.forEach((v,k)=>{
                    if(index==k){
                        orderList.splice(k,1)
                    }
                })
                that.setData({
                    orderList: orderList
                })
                app.globalData.orderInfo = orderList
            }
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        orderList: app.globalData.orderInfo
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
      this.setData({
          orderList: app.globalData.orderInfo
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