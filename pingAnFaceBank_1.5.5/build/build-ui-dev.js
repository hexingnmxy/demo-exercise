import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.ui.dev.config';
import devMiddleWare from 'webpack-dev-middleware';
import hotMiddleWare from 'webpack-hot-middleware';

let app = express();
let compiler = webpack(webpackConfig);
let webpackHotMiddleWare = hotMiddleWare(compiler);
let webpackDevMiddleWare = devMiddleWare(compiler, {
	publicPath: webpackConfig.output.publicPath,
	stats: {colors: true}
});
compiler.plugin('compilation', function(compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
		webpackHotMiddleWare.publish({ action: 'reload' });
		cb();
	});
});
app.use(webpackHotMiddleWare);
app.use(webpackDevMiddleWare);
app.listen(6767, function() {
	console.log('server start at 6767');
});
