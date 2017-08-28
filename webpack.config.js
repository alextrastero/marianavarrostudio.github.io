const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 3000;
const DIST_PATH = path.resolve(__dirname, 'dist');
const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: DIST_PATH,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        use: ENV === 'production' ? 'file-loader' : 'url-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules'
    ],
    extensions: ['.js', '.json', '.scss']
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: DIST_PATH,
    compress: true,
    port: process.env.PORT || PORT,
    historyApiFallback: true
  },
  devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  stats: { colors: true },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs'
    })
  ]
}
