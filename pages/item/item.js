Page({
  data: {
    title: '',
    loading: true,
    movie: {}
  },
  onLoad (params) {
    const _this = this;
    const url = 'https://api.douban.com/v2/movie/subject/' + params.id;
    wx.request({
        url: url,
        data: {},
        header: {
            'content-type': 'json' // 默认值
        },
        success: function(res) {
          _this.setData({
            movie: res.data,
            loading: false
          });
        }
    });
  },
  onReady () {
    wx.setNavigationBarTitle({ title: this.data.title + ' « 电影 « 豆瓣' })
  }
})