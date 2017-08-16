import webpack from 'webpack'
import webpackconfig from './webpack.dev.config'
import express from 'express'
import devMiddleWare from 'webpack-dev-middleware'
import hotMiddleWare from 'webpack-hot-middleware'


let app = express()
let compiler = webpack(webpackconfig)
let webpackHotMiddleWare = hotMiddleWare(compiler)
let webpackDevMiddleWare = devMiddleWare(compiler,{
	publicPath:webpackconfig.output.publicPath,
	stats:{colors:true}
});

// compiler.plugin('compilation',function(compilation){
// 	compilation.plugin('html-webpack-plugin-after-emit',function(data,cb){
// 		webpackHotMiddleWare.publish({action:'reload'});
// 		cb()
// 	})
// })

app.use(webpackHotMiddleWare)
app.use(webpackDevMiddleWare)

app.listen(7777,function(){
	console.log('server start at 7777');
})