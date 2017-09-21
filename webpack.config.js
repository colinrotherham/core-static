import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';

// Use config for running process
let options = {};
const optionsPath = path.resolve(process.cwd(), '.babelrc.client.js');

if (fs.existsSync(optionsPath)) {
	options = require(optionsPath);
}

// Return module
export default {
	devtool: 'source-map',

	module: {
		rules: [{
			test: /\.js$/,
			include: [
				path.resolve('./src'),
				path.resolve('./src/assets')
			],
			use: [{
				loader: 'babel-loader',
				options: options
			}]
		}]
	},

	output: {
		chunkFilename: '[name]-[chunkhash].min.js',
		filename: '[name].min.js',
		publicPath: '/assets/js/'
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'critical'
		}),
		new UglifyJSPlugin({
			uglifyOptions: {
				compress: {
					ie8: true,
					warnings: false
				},
				mangle: {
					ie8: true
				},
				output: {
					comments: false,
					ie8: true
				},
				sourceMap: true
			}
		})
	],

	resolve: {
		modules: [
			'node_modules',
			`./src/assets/js`
		]
	}
};
