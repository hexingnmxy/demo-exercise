import webpack from 'webpack';
import webpackConfig from './webpack.pro.config';
import path from 'path';

let chunk = 'longDistanceCheck';

webpackConfig.entry = [
	`./src/business/${chunk}/index.js`,
	'./src/business/config/proConfig.js'
];
webpackConfig.output.path = path.resolve(`dist/business/${chunk}/`);

webpack(webpackConfig, function(error, status) {
	if (error) throw (error);
	process.stdout.write(status.toString() + '\n');
});
