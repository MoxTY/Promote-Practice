var path = require('path') 
var config = require('../config') // 加载 confi.index.js
var utils = require('./utils') // 使用一些小工具
var webpack = require('webpack') // 加载 webpack
var merge = require('webpack-merge') // 加载 webpack 配置合并工具
var baseWebpackConfig = require('./webpack.base.conf') // 加载 webpack.base.conf.js
/* 一个 webpack 扩展，可以提取一些代码并且将它们和文件分离开 */ 
/* 如果我们想将 webpack 打包成一个文件 css js 分离开，那我们需要这个插件 */
var ExtractTextPlugin = require('extract-text-webpack-plugin')
/* 一个可以插入 html 并且创建新的 .html 文件的插件 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = config.build.env

/* 合并 webpack.base.conf.js */
var webpackConfig = merge(baseWebpackConfig, {
  module: {
    /* 使用的 loader */
    loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  /* 是否使用 #source-map 开发工具，更多信息可以查看 DDFE 往期文章 */
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    /* 编译输出目录 */
    path: config.build.assetsRoot,
    /* 编译输出文件名 */
    filename: utils.assetsPath('js/[name].[chunkhash].js'), // 我们可以在 hash 后加 :6 决定使用几位 hash 值
    // 没有指定输出名的文件输出的文件名
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  vue: {
    /* 编译 .vue 文件时使用的 loader */
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    /* 使用的插件 */
    /* definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串 */
    new webpack.DefinePlugin({
      'process.env': env
    }),
    /* 压缩 js (同样可以压缩 css) */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    /* 将 css 文件分离出来 */
    new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
    /* 构建要输出的 index.html 文件， HtmlWebpackPlugin 可以生成一个 html 并且在其中插入你构建生成的资源 */
    new HtmlWebpackPlugin({
      filename: config.build.index, // 生成的 html 文件名
      template: 'index.html', // 使用的模板
      inject: true, // 是否注入 html (有多重注入方式，可以选择注入的位置)
      minify: { // 压缩的方式
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // 更多参数可查看 https://github.com/kangax/html-minifier#options-quick-reference
      },
      chunksSortMode: 'dependency'
    }),
    
    // CommonsChunkPlugin用于生成在入口点之间共享的公共模块（比如jquery，vue）的块并将它们分成独立的包。而为什么要new两次这个插件，这是一个很经典的bug的解决方案，在webpack的一个issues有过深入的讨论webpack/webpack#1315 .----为了将项目中的第三方依赖代码抽离出来，官方文档上推荐使用这个插件，当我们在项目里实际使用之后，发现一旦更改了 app.js 内的代码，vendor.js 的 hash 也会改变，那么下次上线时，用户仍然需要重新下载 vendor.js 与 app.js
    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // 依赖的 node_modules 文件会被提取到 vendor 中
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
    
  ]
})

/* 开启 gzip 的情况下使用下方的配置 */
if (config.build.productionGzip) {
  /* 加载 compression-webpack-plugin 插件 */
  var CompressionWebpackPlugin = require('compression-webpack-plugin')
  /* 向webpackconfig.plugins中加入下方的插件 */
  webpackConfig.plugins.push(
    /* 使用 compression-webpack-plugin 插件进行压缩 */
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig
