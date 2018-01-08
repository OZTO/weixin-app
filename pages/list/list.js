Page({
	data: {
		title: 'Loading...',
		list: [],
		type: '',
		loading: true
	},
	onLoad (params) {
		const _this = this;
		const url = 'https://api.douban.com/v2/movie/' + params.type;
		wx.request({
		    url: url,
		    data: {},
		    header: {
		        'content-type': 'json' // 默认值
		    },
		    success: function(res) {
		    	console.log(res.data);
		        _this.setData({
		        	title: res.data.title,
		        	list: res.data.subjects,
		        	type: params.type,
		        	loading: false
		        })
		    }
		})
	}
})