// pages/shopCart/shopCart.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    shopCarts:[],
    total:0
  },
//   事件处理函数
    subOrder(){

    },
    add(e){
        console.log(1)
        var index = e.currentTarget.dataset.index;
        var shopCarts = this.data.shopCarts;
        for (var i = 0; i < shopCarts.length; i++) {
            if (i == index) {
                shopCarts[i].number+=1
            }
        }
        this.setData({
            shopCarts: shopCarts
        })
        wx.setStorage({
            key: 'shopCart',
            data: shopCarts,
        })
    },
    cancal(e){
        var index = e.currentTarget.dataset.index;
        var shopCarts = this.data.shopCarts;
        for (var i = 0; i < shopCarts.length; i++) {
            if (i == index) {
                if (shopCarts[i].number <= 1){
                    shopCarts.splice(index,1)
                }else{
                    shopCarts[i].number -= 1
                }
            }
        }
        this.setData({
            shopCarts: shopCarts
        })
        wx.setStorage({
            key: 'shopCart',
            data: shopCarts,
        })
    },
    delete:function(e){
        var total = 0;
        var index = e.currentTarget.dataset.index;
        var shopCarts = this.data.shopCarts;
        for(var i=0;i<shopCarts.length;i++){
            if(i==index){
                shopCarts.splice(i,1)
            }
        }
        for(var j=0;j<shopCarts.length;j++){
            total += shopCarts[j].price
        }
        this.setData({
            shopCarts:shopCarts,
            total:total
        })
        wx.setStorage({
            key: 'shopCart',
            data: shopCarts,
        })
        console.log(shopCarts)
        wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
    onShow: function () {
      var that = this;
      var shopCarts = that.data.shopCarts;
      var total = that.data.total;
    wx.getStorage({
        key: 'shopCart',
        success: function(res) {

            that.setData({
                shopCarts:res.data
            })
            console.log(that.data.shopCarts)
            for (var i = 0; i < res.data.length; i++) {
                total += parseInt(res.data[i].price)
            }
            that.setData({
                total:total
            })
        }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**

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