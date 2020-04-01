let merge = require('webpack-merge');
let webpackBase = require('./webpack.config.base');
module.exports = merge(webpackBase,{
      mode: 'production', // 模式，默认两种 production和 development
})