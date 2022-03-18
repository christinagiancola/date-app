const path = require('path');
const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'production',
	plugins: [
		new DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new Dotenv({
			path: path.resolve(__dirname, '..', './.env.production'),
		}),
	],
	devtool: 'source-map',
};
