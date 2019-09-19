var path = require('path') // 使用 NodeJS 自带的文件路径插件
var config = require('../config') // 引入 config/index.js
var utils = require('./utils') // 引入一些小工具
var projectRoot = path.resolve(__dirname, '../') // 拼接我们的工作区路径为一个绝对路径

/* 将 NodeJS 环境作为我们的编译环境 */
var env = process.env.NODE_ENV
/* 是否在 dev 环境下开启 cssSourceMap ，在 config/index.js 中可配置 */
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
/* 是否在 production 环境下开启 cssSourceMap ，在 config/index.js 中可配置 */
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
/* 最终是否使用 cssSourceMap */
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
    app: './src/main.js' // 编译文件入口
  },
  output: {
    path: config.build.assetsRoot, // 编译输出的静态资源根路径
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath, // 正式发布环境下编译输出的上线路径的根路径
    filename: '[name].js' // 编译输出的文件名
  },
  resolve: {
    // 自动补全的扩展名
    extensions: ['', '.js', '.vue'],
    // 不进行自动补全或处理的文件或者文件夹
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
	  // 默认路径代理，例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      // 预处理的文件及使用的 loader
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      // 需要处理的文件及使用的 loader
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint: {
    // eslint 代码检查配置工具
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    // .vue 文件配置 loader 及工具 (autoprefixer)
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}