const path = require('path');
const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'development',
	plugins: [
		new DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		new Dotenv({
			path: path.resolve(__dirname, '..', './.env.development'),
		}),
	],
	devtool: 'eval-source-map',
};
