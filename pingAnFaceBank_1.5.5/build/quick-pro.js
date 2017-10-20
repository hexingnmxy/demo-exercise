import webpack from 'webpack';
import webpackConfig from './webpack.pro.config';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

let chunk = 'safetySign';

webpackConfig.entry = [
	'./pa-facebank-src/business/config/proConfig.js',
	`./pa-facebank-src/business/${chunk}/index.js`

];
webpackConfig.output.path = path.resolve(`pa-facebank/business/${chunk}/`);
let cleanWebpackPlugin = new CleanWebpackPlugin([`${chunk}`], {
	root: path.resolve('./pa-facebank/business'), // An absolute path for the root  of webpack.config.js
	verbose: true // Write logs to console.
});
webpackConfig.plugins.push(cleanWebpackPlugin);

webpack(webpackConfig, function(error, status) {
	if (error) throw (error);
	process.stdout.write(status.toString() + '\n');
});
