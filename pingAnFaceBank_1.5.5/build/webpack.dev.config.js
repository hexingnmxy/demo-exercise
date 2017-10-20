import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let chunk = 'safetySign'; // 业务--安全锁签约
// let chunk = 'sameCardApply'; // 业务--同卡号换卡申请

export default {
	entry: {
		app: [
			'webpack-hot-middleware/client',
			'./pa-facebank-src/config/devConfig.js',
			'./pa-facebank-src/common/index.js', // 每种模式都需要引入这个模块，定义全局变量
			`./pa-facebank-src/business/${chunk}/index.js`
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
			// {test: /\.ttf$/, loader: 'url-loader'},
			{test: /\.webp$/, loader: 'file-loader?limit=0&name=[name].[ext]'}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './pa-facebank-src/template/index.html'}),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['.js', '.vue', '.less'],
		alias: {
			'vue$': 'vue/dist/vue.js',
			'pa-ui': path.resolve('./pa-ui'),
			'node_modules': path.resolve('./node_modules') // pa-ui-src的Carousel组件中用到
		}
	}
};
