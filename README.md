# 小程序开发实战- 豆瓣电影

## 对项目进行配置

在项目下的app.json中配置


## 规划整个程序的所有页面并做配置

在pages/下创建每一个页面，每个页面都是一个文件夹包含3个文件 JS WXML WXSS

在项目下的app.json中配置pages

配置的第一个页面作为默认页面呈现

## 完成榜单页面

注意:如果需要点击时高亮,可以给元素加上cursor:pointer

页面与页面之间跳转可以使用navigator组件

页面与页面之间的传值方式：

	类似于web开发的方式： 问号参数，跳转到的页面通过onLoad方法的参数拿到

## 参考

	微信开发者工具下载地址：https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=201714
	微信组件参考API：https://mp.weixin.qq.com/debug/wxadoc/dev/component/
	豆瓣提供的电影接口和数据：https://developers.douban.com/wiki/?title=movie_v2#in_theaters