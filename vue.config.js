module.exports = {
	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					modifyVars: {
						'font-size-base': '16px'
					},
					javascriptEnabled: true,
				},
			},
		},
	},
	devServer: {
		host: "localhost",
		port: 8080,
		https: false,
		proxy: {
			'/weather': {  //代理地址
				target: 'https://api.caiyunapp.com/v2.5/nnCCVfRGgb1iU0FC', //需要代理的地址
				changeOrigin: true, //是否跨域
				ws: true,
				secure: true,
				pathRewrite: {
					'^/weather': ''
				}
			},
			
			'baiduMap': {
				target: 'http://api.map.baidu.com/reverse_geocoding/v3', //需要代理的地址
				changeOrigin: true, //是否跨域
				ws: true,
				pathRewrite: {
					'^/baiduMap': ''
				}
			}
		}
	}
}
