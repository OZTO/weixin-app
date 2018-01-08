Page({
  data: {
    imgWrap: [
    ]
  },
  onLoad () {
  	const _this = this;
  	wx.request({
  	    url: 'https://api.douban.com/v2/movie/coming_soon',
  	    data: {},
  	    header: {
  	        'content-type': 'json' // 默认值
  	    },
  	    success: function(res) {
  	    	const data = res.data.subjects.slice(0,5);
  	    	_this.setData({
  	    		imgWrap: data
  	    	})
  	    }
  	})
  },
})