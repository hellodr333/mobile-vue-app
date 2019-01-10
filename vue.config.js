const path = require('path')
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
	},
	// build将构建好的文件输出到哪里
	outputDir: 'dist',

	// build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
	assetsDir: '',

	// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
	indexPath: 'index.html',

	// 是否在保存的时候使用 eslint-loader 检查
	lintOnSave: true,

	// 默认在生成的静态资源文件名中包含hash以控制缓存
	filenameHashing: true,

	// 使用带有浏览器内编译器的完整构建版本
	// compiler: false,

	// bable-loader 默认会跳过 node_modules 依赖
	// 通过这个选项可以显示转译一个依赖
	transpileDependencies: [/* string or regex*/],

	// 是否为生产环境构建生成 source map
	productionSourceMap: false,

	// 调整内部的 webpack 配置
	chainWebpack: () => { },
	configureWebpack: () => { },

	// css相关
	css: {
		// 为预处理器的loader 传递自定义选项，比如传递给 sass-loader 时,使用`{sass: { ... }}`
		loaderOptions: {
			stylus: {
				import: [
					path.join(__dirname, './src/styles/common.styl'), // 一次性引入全局样式
				],
				paths: [
					path.join(__dirname, './src/styles'),
					path.join(__dirname, './')
				]
			}
		}
	}

}