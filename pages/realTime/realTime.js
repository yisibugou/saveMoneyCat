// pages/realTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var goods = [
      {
        img: "https://img.pddpic.com/gaudit-image/2021-08-06/9accb95f4955eedc1c5a34442299d57a.jpeg",
        name: "香莎护发素干枯毛躁修复香水味持久学生男女顺滑大瓶容量高档香氛",
        returnMoney: 2.9,
        priceAfterCoupon: 22.9,
        saleNum: "2万件",
        tagList: [
          "退货包运费",
          "七天无理由"
        ]
      },
      {
        img: "https://img.pddpic.com/gaudit-image/2021-08-06/9accb95f4955eedc1c5a34442299d57a.jpeg",
        name: "香莎护发素干枯毛躁修复香水味持久学生男女顺滑大瓶容量高档香氛",
        returnMoney: 2.9,
        priceAfterCoupon: 22.9,
        saleNum: "2万件",
        tagList: [
          "质保三年",
          "七天无理由"
        ]
      }
    ];
    var goodsListTemp = new Array();
    for(var i = 0; i < 10; ++i) {
      goodsListTemp.push(goods[i % 2]);
    }
    that.setData({
      goodsList: goodsListTemp
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