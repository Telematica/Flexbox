//const autoprefixer = require('autoprefixer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const style = new ExtractTextPlugin('./dist/css/[name].css');
//@todo postcss

module.exports = {
	entry: './assets/js/app.js',

	output: {
		filename: 'dist/js/app.js',
		//path: path.resolve(__dirname, 'dist')
        publicPath: '../'
	},

	devtool: 'source-map',

	module: {
		rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'es2016']
            }
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: ["css-loader", "sass-loader"]
			})
		}]
	},

	plugins: [
		style,
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			notify: false,
			open: true,
			proxy: 'flexbox.test/'
		})
	],
};