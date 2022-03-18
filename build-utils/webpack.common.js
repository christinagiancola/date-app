const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.js'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(css)$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Hello Webpack bundled JavaScript Project',
			template: path.resolve(__dirname, '..', './src/index.html'),
		}),
	],
	output: {
		path: path.resolve(__dirname, '..', './dist'),
		filename: 'bundle.js',
	},
	devServer: {
		static: path.resolve(__dirname, '..', './dist'),
	},
};
