// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopInfo:{},
    shopNum:0
  },
    addCarts:function(){
        var that = this;
        // if (that.data.shopNum>=1){
        //     wx.showToast({
        //         title: '已加入购物车',
        //     })
        //     return;
        // }
        wx.getStorage({
            key: 'shopCart',
            success: function(res) {
                // var num = that.data.shopNum+=1;
                // that.setData({
                //     shopNum:num
                // })
                res.data.push(that.data.shopInfo)
                wx.setStorage({
                    key: 'shopCart',
                    data: res.data,
                })
                wx.showToast({
                    title: '已加入购物车',
                    icon: 'success'
                })
            },
        })
    },
    buy(){
        wx.navigateTo({
            url: '../../pages/order/order?title='+this.data.shopInfo.title+"&price="+this.data.shopInfo.price+"&url="+this.data.shopInfo.url,
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
      if(res){
          this.setData({
              shopInfo:res
          })
      }
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
    this.setData({
        shopNum:0
    })
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