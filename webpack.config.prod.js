let merge = require('webpack-merge');
const webpack = require("webpack")
let webpackBase = require('./webpack.config.base');
module.exports = merge(webpackBase, {
      mode: 'production', // 模式，默认两种 production和 development
})