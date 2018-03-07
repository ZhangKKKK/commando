// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      disabled:false
  },
  phone(e){
      var phone = e.detail.value
      if(phone.length != 11){
          wx.showToast({
              title: '请输入正确手机号',
          })
          this.setData({
              disabled: false
          })
      }else{
          this.setData({
              disabled:true
          })
      }
  },
    save(e){
        if(!this.data.disabled){
            wx.showToast({
                title: '请正确填写',
                icon:'none'
            })
            return;
        }
        wx.setStorage({
            key: 'address',
            data: e.detail.value,
            success(){
                wx.navigateBack({
                    delta: 1
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