const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/index.js'),
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
			{
				test: /\.(css)$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devtool: 'eval-source-map',
	resolve: {
		extensions: ['*', '.js'],
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Hello Webpack bundled JavaScript Project',
			template: path.resolve(__dirname, './src/index.html'),
		}),
	],
	devServer: {
		static: path.resolve(__dirname, './public'),
	},
};
