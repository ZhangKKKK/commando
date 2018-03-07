//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    shopCart:[],
    bannerData:[
        { id: 1, url: '../../images/banner1.jpg' },
        { id: 2, url: '../../images/banner2.jpg' },
        { id: 3, url: '../../images/banner3.jpg' }
    ],
    shopList: [
        { topId: 1, topTitle: '零食·小吃', item: [{ id: 1, title: '坚果夹心海苔', price: 9, url: '../../images/shopImgs/1.jpg' }, { id: 2, title: '长沙猪肉脯', price: 13, url: '../../images/shopImgs/2.jpg' }] },
        { topId: 2, topTitle: '生鲜·水果', item: [{ id: 1, title: '红霞草莓一盒', price: 9, url: '../../images/shopImgs/shop3.jpg' }, { id: 2, title: '丰州大橙子一只', price: 6, url: '../../images/shopImgs/shop4.jpg' }] },
        { topId: 3, topTitle: '奶品·水饮', item: [{ id: 1, title: '怡宝饮用水', price: 23, url: '../../images/shopImgs/shop1.jpg' }, { id: 2, title: '德亚酸奶整箱', price: 34, url: '../../images/shopImgs/shop2.jpg' }] }
    ]
  },
  onPullDownRefresh(){
      console.log(1)
      setTimeout(function(){
          wx.stopPullDownRefresh()
      },2000)
    
  },
  //事件处理函数
  goSearch:function(){
    wx.navigateTo({
        url: '../search/search',
    })
  },
  shopDetail(e){
      var item = e.currentTarget.dataset.item;
      wx.navigateTo({
          url: '../detail/detail?title='+item.title+'&price='+item.price+'&url='+item.url,
      })
  },
  onLoad: function () {
        var that = this;
    //   bannerImg
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //   })
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
    // 购物车
    wx.getStorage({
        key: 'shopCart',
        success: function(res) {
            // console.log(res);
        },
        fail:function(){
            wx.setStorage({
                key: 'shopCart',
                data: that.data.shopCart,
            })
        }
    })
  },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   },
})
