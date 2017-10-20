import webpack from 'webpack';
import path from 'path';

let webpackConfig = {
	// entry: './pa-ui-src/components/button/index.vue',
	output: {
		// path: './pa-ui/components/button',
		libraryTarget: 'umd',
		library: 'pa-ui',
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader', 'eslint-loader'],
				exclude: /node_modules/,
				enforce: 'pre'
			},
			{test: /\.vue$/, use: 'vue-loader', exclude: /node_modules/},
			{test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
			// {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			{test: /\.ttf$/, loader: 'url-loader'}
		]
	},
	resolve: {
		extensions: ['.js', '.vue', '.less']
	}
};

// let componentsArray = ['button', 'sort', 'radio', 'radio-button', 'radio-tab',
// 	'switch', 'checkbox', 'checkbox-button', 'rate', 'input', 'input-search', 'textarea',
// 	'pop-loading', 'pop-box', 'mask', 'pop-data-list', 'linkage', 'select-box', 'select-item',
// 	'select-text', 'carousel', 'carousel-new', 'carousel-item', 'step-line', 'slider-toggle',
// 	'dot-item', 'image-show', 'two-level-list', 'icon'];

let componentsArray = ['mask'];

buildUiComponents();

function buildUiComponents() {
	for (let i = 0; i < componentsArray.length; i++) {
		webpackConfig.entry = `./pa-ui-src/components/${componentsArray[i]}/index.vue`;
		webpackConfig.output.path = path.resolve(`./pa-ui/components/${componentsArray[i]}`);
		webpack(webpackConfig, function(error, status) {
			if (error) throw error;
			process.stdout.write(status.toString() + '\n');
		});
	}
}
