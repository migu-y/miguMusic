const path=require('path')

module.exports={
  chainWebpack(config){
    config.resolve.alias
      .set('@',path.resolve(__dirname,'./src/'))
      .set('@c',path.resolve(__dirname,'./src/components/'))
      .set('@u',path.resolve(__dirname,'./src/utils'))
      .set('@v',path.resolve(__dirname,'./src/views'))
      .set('@a',path.resolve(__dirname,'./src/assets'))
      .set('@r',path.resolve(__dirname,'./src/router'))
  },
  devServer:{
    proxy:{
      '/api':{
        target:"https://go.heytea.com",
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      },
      '/items':{
        target:'http://localhost:9000',
        changeOrigin:true,
      }
    }
  },
}