import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

export default{
	entry:{
		app:[
			'webpack-hot-middleware/client',
			'./src/index.js'
		]
	},
	output:{
		path: path.resolve(__dirname, '../dist'),
		filename:'index.js'
	},
	module:{
		loaders:[
			{test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
			{test:/\.vue$/,loader:'vue-loader',exclude:/node_modules/},
			{test:/\.less$/,loader:'style!css!less'},
			{test:/\.(png|jpg)$/,loader:'url-loader?limit=8192'},
			{test:/\.ttf$/,loader:'url-loader'}
				]

	},
	plugins:[
		new HtmlWebpackPlugin({template:'./src/index.html'}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve:{
		extensions:['.js','.vue','.less'],
		alias:{'vue$':'vue/dist/vue.js'}
	}
}