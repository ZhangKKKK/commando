// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchVal:'',
    shopList:[],
    historyList:[]
  },
  searchVal(e){
    this.setData({
        searchVal:e.detail.value
    })
  },
  search(e){
    var val = e.currentTarget.dataset.item;
    console.log(val)
  },
  clearHistory(){
      wx.removeStorage({
          key: 'history',
          success: function(res) {
              console.log(res)
          },
      })
      this.setData({
          historyList:[]
      })
  },
  clickSearch(){
      var that = this;
      var historyArr = that.data.historyList;
      that.setData({
        shopList: [{ id: 4, name: '丰州大橙子一只', type: 1, url: '../../images/shopImgs/shop4.jpg', price: 9 },
        { id: 5, name: '坚果夹心海苔', type: 0, url: '../../images/shopImgs/5.jpg', price: 9 },
        { id: 6, name: '坚果夹心海苔', type: 0, url: '../../images/shopImgs/6.jpg', price: 9 },]
    })
    //   historyArr.forEach(v=>{
    //       if(v == that.data.searchVal){

    //       }else{
              
    //       }
    //   })
      historyArr.push(that.data.searchVal)
      that.setData({
          historyList: historyArr
      })
      wx.setStorage({
          key: 'history',
          data: historyArr,
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
    wx.getStorage({
        key: 'history',
        success: function(res) {
            console.log(res)
            that.setData({
                historyList:res.data
            })
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
  onShow: function () {
      var that = this;
      wx.getStorage({
          key: 'history',
          success: function (res) {
              that.setData({
                  historyList: res.data
              })
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