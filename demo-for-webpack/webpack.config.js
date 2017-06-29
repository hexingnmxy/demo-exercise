var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin   = require('html-webpack-plugin');


// 获取html-webpack-plugin参数的方法 
var getHtmlConfig = function(name, title){
    return {
        template    : './src/view/' + name + '.html',
        filename    : 'view/' + name + '.html',
        // favicon     : './favicon.ico',
        title       : title,
        inject      : true,
        hash        : false,
        chunks      : ['common', name]
    };
};

module.exports = {
 entry: {
        'common' : ['./src/page/common/index.js'],
        'list' : ['./src/page/list/index.js'],
        'index'  : ['./src/page/index/index.js'],
    },
  output: {
    path        : __dirname + '/dist/',
    publicPath  : '/dist/',
    filename    : 'js/[name].js'
  },
  devServer:{
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    inline:true
  },
  resolve : {
    alias : {
        node_modules    : __dirname + '/node_modules',
        util            : __dirname + '/src/util',
        page            : __dirname + '/src/page',
        img            : __dirname + '/src/img'
    }
},
externals: {
      jquery: "jQuery"
    },
  module: {
     rules: [
       // {
       //   test: /\.css$/,
       //   use: ['style-loader','css-loader'],
       //   use: ExtractTextPlugin.extract({ use: 'css-loader'})
       // },
       { 
        test: /\.css$/, 
         use: ['style-loader','css-loader'],
        use: ExtractTextPlugin.extract(["style-loader","css-loader"]) 
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: ['file-loader']
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: ['file-loader']
       },
       {
        test: /\.less$/i, 
        use: ExtractTextPlugin.extract(['css-loader','less-loader','postcss-loader'])
      },
      {
        test: /\.string$/, 
        loader: 'html-loader',
        query : {
            minimize : true,
            removeAttributeQuotes : false
        }
    }
     ]
   },
    plugins: [
    new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
       new ExtractTextPlugin("css/[name].css"),
       new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
       new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表')),
    ]
};