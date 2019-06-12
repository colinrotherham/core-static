import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import options from './.babelrc.client.js';
import path from 'path';
import webpack from 'webpack';

// Return module
export default {
  mode: 'production',

  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve('./src'),
        path.resolve('./src/assets'),
      ],
      use: [{
        loader: 'babel-loader',
        options: options,
      }],
    }],
  },

  output: {
    chunkFilename: '[name]-[chunkhash].min.js',
    filename: '[name].min.js',
    path: path.resolve('./dist/assets/js'),
    publicPath: '/assets/js/',
  },

  optimization: {
    minimizer: [new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        compress: {
          ie8: true,
          warnings: false,
        },
        mangle: {
          ie8: true,
        },
        output: {
          comments: false,
          ie8: true,
        },
      },
    })],
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].min.js.map',
      publicPath: '/assets/js/',
    }),
  ],

  resolve: {
    modules: [
      'node_modules',
      `./src/assets/js`,
    ],
  },
};
