const path = require('path')

module.exports = {
    chainWebpack(config) {
        config.resolve.alias
            .set('@', path.resolve(__dirname, './src/'))
            .set('@c', path.resolve(__dirname, './src/components/'))
            .set('@u', path.resolve(__dirname, './src/utils'))
            .set('@v', path.resolve(__dirname, './src/views'))
            .set('@a', path.resolve(__dirname, './src/assets'))
            .set('@r', path.resolve(__dirname, './src/router'))
    },

    // development server
    devServer: {
        // 反向代理: http-proxy-middleware
        proxy: {
            // 暗号: 当在浏览器地址栏里输入/api字符串的时候，http-proxy-middleware会将请求拦下来
            '/data': {
                target: 'https://go.heytea.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/data': ''
                }
            },
            "/list": {
                target: "http://localhost:9000",
                changeOrigin: true,
            },
            '/around': {
                target: 'http://localhost:9000',
                changeOrigin: true,
                pathRewrite: {
                    '^/soul': ''
                }
            }
        },
    }
}