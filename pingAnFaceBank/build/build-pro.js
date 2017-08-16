import webpack from 'webpack';
import webpackConfig from './webpack.pro.config';
import path from 'path';

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
			`./src/business/${chunk}/index.js`,
			'./src/business/config/proConfig.js'
		]
	};
	webpackConfig.output.path = path.resolve(`dist/business/${chunk}/`);
	webpack(webpackConfig, function(error, status) {
		console.log("123");
		if (error) throw (error);
		process.stdout.write(status.toString() + '\n');
	});
});
