var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var path = require('path')
var vConsolePlugin = require('vconsole-webpack-plugin'); 

// add hot-reload related code to entry chunks
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//   baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
  new vConsolePlugin({
            enable: true // 发布代码前记得改回 false
          }),
  new webpack.DefinePlugin({
    'process.env': config.dev.env
  }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),
    new FriendlyErrorsPlugin(),
    ]
  })



var pages = utils.getEntries('src/pages/**/*.html');

for (var pathname in pages) {
 // 配置生成的html文件，定义路径等
 var conf = {
  filename: pathname + '.html',
  template: pages[pathname],  // 模板路径
  inject: true,       // js插入位置
  chunks:[pathname]
};
module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}

