module.exports = {
	// baseUrl 默认 根路径 '/'
	baseUrl: process.env.NODE_ENV === 'production'?'/production-sub-path':'/',
	// 如果前端应用和后端 api 服务器没有运行在一个主机上，那么需要在开发环境下将 API请求代理到api服务器
	devServer: {
		proxy: {
			// 匹配以 /mdm 开头的 路径
			'/mdm': {
				// 告诉开发服务器 将任何 以 '/mdm' 开头的未知请求都（没有匹配到静态文件的请求）代理到 example_url
				target: '<example_url>',
				ws: true, // proxy websockets
				changeOrigin: true // needed for virtual hosted sites
			},
			'/foo': {
				target: '<other_url>'
			}
		}
	}
}