// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex:0,
    shopCart:[],
    c_shopList: [
        { id: 1, name: '坚果夹心海苔', type: 2, url: '../../images/shopImgs/1.jpg', price: 9 },
        { id: 2, name: '长沙猪肉脯', type: 2, url: '../../images/shopImgs/2.jpg', price: 13 },
        { id: 3, name: '红霞草莓一盒', type: 1, url: '../../images/shopImgs/shop3.jpg', price: 9 },
        { id: 4, name: '丰州大橙子一只', type: 1, url: '../../images/shopImgs/shop4.jpg', price: 9 },
        { id: 5, name: '坚果夹心海苔', type: 0, url: '../../images/shopImgs/5.jpg', price: 9 },
        { id: 6, name: '坚果夹心海苔', type: 0, url: '../../images/shopImgs/6.jpg', price: 9 },
    ]
  },
  changeIndex(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
        tabIndex:index
    })
  },
  addShopCart(e){
      var that = this;
    var item = e.currentTarget.dataset.item;
    wx.getStorage({
        key: 'shopCart',
        success:function(res){
            console.log(res.data);
            that.setData({
                shopCart:res.data
            })
            item.number=1;
            that.data.shopCart.push(item)
            console.log(that.data.shopCart)
            wx.setStorage({
                key: 'shopCart',
                data: that.data.shopCart,
            })
            wx.showToast({
                title: '添加成功',
                icon: 'success',
                duration: 1000
            })
        },
        fail:function(){
            wx.showToast({
                title: '添加失败',
                icon: 'none',
                duration: 1000
            })
        }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})