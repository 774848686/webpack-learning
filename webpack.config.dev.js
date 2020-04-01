let merge = require('webpack-merge');
let webpackBase = require('./webpack.config.base');
module.exports = merge(webpackBase,{
    devServer: {
        port: 3001,
        progress: true,
        before(app){ //这个钩子函数可以做到 请求express 内置服务进行数据模拟
          app.get('/api/user',(req,res)=>{
            res.json({name:'test-proxy-before'})
        })
        },
        // webpack-dev-server服务将http://localhost:3001/api/user 转发给 http://localhost:3000/api/user
        // proxy:{
        //   '/api':{
        //     target:'http://localhost:3000',
        //     pathReWrite:{
        //       '/api':'/api'
        //     }
        //   },
        // }
        // open: true
      },
      mode: 'development', // 模式，默认两种 production和 development
})