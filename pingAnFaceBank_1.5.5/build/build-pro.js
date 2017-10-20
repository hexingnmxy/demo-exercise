import webpack from 'webpack';
import webpackConfig from './webpack.pro.config';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

process.stdin.setEncoding('utf8');
function readable() {
	process.stdout.write('input your business name:');
	process.stdin.on('readable', () => {
		let chunk = process.stdin.read();
		if (typeof chunk === 'string') {
			chunk = chunk.slice(0, -1);
			if (chunk === '') { // 刚刚是回车，继续等待输入
				readable();
				return false;
			} else {
				process.stdin.emit('end', chunk);
			}
		}
	});
}
readable();
process.stdin.on('end', chunk => {
	webpackConfig.entry = {
		app: [
			'./pa-facebank-src/config/proConfig.js',
			`./pa-facebank-src/business/${chunk}/index.js`
		]
	};
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
});
