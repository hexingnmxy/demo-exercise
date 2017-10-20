import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	output: {
		filename: 'index.[chunkhash:5].js'
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
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					// resolve-url-loader may be chained before less-loader if necessary
					use: ['css-loader', 'less-loader']
				})
			},
			{test: /\.(png|jpg|gif)$/, loader: 'file-loader?limit=8192&name=../assets/[ext]/[name].[hash:4].[ext]'},
			// {test: /\.ttf$/, loader: 'url-loader'},
			{test: /\.webp$/, loader: 'file-loader?limit=0&name=../assets/webp/[name].[ext]'}
		]
	},
	plugins: [
		// new HtmlWebpackPlugin({template: './pa-facebank-src/business/index.html'}),
		new HtmlWebpackPlugin({template: './pa-facebank-src/template/index.html'}),
		new ExtractTextPlugin({
			filename: 'index.[contenthash:5].css'
		})
	],
	resolve: {
		extensions: ['.js', '.vue', '.less'],
		alias: {
			'vue$': 'vue/dist/vue.js',
			'pa-ui': path.resolve('./pa-ui'),
			'node_modules': path.resolve('./node_modules')
		}
	}
};
