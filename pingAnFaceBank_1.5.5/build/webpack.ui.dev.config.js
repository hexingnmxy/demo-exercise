import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	entry: {
		app: [
			'webpack-hot-middleware/client',
			// './pa-facebank-src/business/open-card/index.js'
			'./pa-facebank-src/business/ui-components/index.js'
		]
	},
	output: {
		path: '/',
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
			{test: /\.vue$/, use: 'vue-loader'},
			{test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
			{test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
			{test: /\.ttf$/, loader: 'url-loader'}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './pa-facebank-src/business/index.html'}),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['.js', '.vue', '.less'],
		alias: {
			'vue$': 'vue/dist/vue.js',
			'pa-ui': path.resolve('./pa-ui')
		}
	}
};
