const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//注意使用这个插件时候 要手动对js进行压缩（terser-webpack-plugin）
const TerserJSPlugin = require('terser-webpack-plugin');
/**
 * 思考：为什么npm run dev 没有生成对应的js以及css文件，却能访问到对用的资源；是因为webpack将其放入到了缓存中；
 */
module.exports = {
  devServer: {
    port: 3000,
    progress: true,
    open: true
  },
  mode: 'development', // 模式，默认两种 production和 development
  entry: './src/index.js', // 入口
  output: {
    filename: 'main.[hash].js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 路径必须是一个绝对
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[{
          loader:'babel-loader',
          options:{ // 用es6->es5
            presets:[
              '@babel/preset-env'
            ],
            // js 高级语法 es7
            plugins:[
              ['@babel/plugin-proposal-class-properties']
            ]
          }
        }]
      },
      {
        // css-loader 主要是解析@import引入 style-loader 主要是插入到style中 MiniCssExtractPlugin.loader 抽离到link中
        // postcss-loader autoprefixer 是为了添加前缀；
        test:/\.css$/,
        // use:['style-loader','css-loader'], //第一种写法
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        // 处理 less sass stylus
        test:/\.less$/,
        use:[
        //   {
        //   loader:'style-loader',
        //   options:{

        //   }
        // },
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
      }
    ],
  },
  // 优化项
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  //放置webpack 所有的插件
  plugins:[
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'index.html',
        minify:{
          collapseWhitespace:true
        },
        hash:true
    }),
    new MiniCssExtractPlugin({
      filename:'main.css'
    })
  ]
}
