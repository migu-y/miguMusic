const path = require('path')

module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src/'))
      .set('@c', path.resolve(__dirname, './src/components/'))
      .set('@u', path.resolve(__dirname, './src/utils'))
      .set('@v', path.resolve(__dirname, './src/views'))
      .set('@a', path.resolve(__dirname, './src/assets'))
  },

  // development server
  devServer: {
    // 反向代理: http-proxy-middleware
    proxy: {
      // 暗号: 当在浏览器地址栏里输入/api字符串的时候，http-proxy-middleware会将请求拦下来
      '/api': {
        target: 'https://wx.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // /api/mmdb/movie/v2/list/hot.json -> /mmdb/movie/v2/list/hot.json
        }
      } 
    }
  },
}