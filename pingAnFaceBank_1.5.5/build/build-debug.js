import webpack from 'webpack';
import webpackConfig from './webpack.debug.config';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

// let chunk = 'safetySign'; // 业务的目录名称--安全锁签约
let chunk = 'sameCardApply'; // 业务的目录名称--同卡号换卡申请

webpackConfig.entry = [
	'./pa-facebank-src/config/debuggerConfig.js',
	`./pa-facebank-src/business/${chunk}/index.js`

];
webpackConfig.output.path = path.resolve(`pa-facebank/business-debugger/${chunk}/`);
let cleanWebpackPlugin = new CleanWebpackPlugin([`${chunk}`], {
	root: path.resolve('./pa-facebank/business-debugger'), // An absolute path for the root  of webpack.config.js
	verbose: true // Write logs to console.
});
webpackConfig.plugins.push(cleanWebpackPlugin);
webpack(webpackConfig, function(error, status) {
	if (error) throw (error);
	process.stdout.write(status.toString() + '\n');
});
