var path = require('path')
var webpack = require('webpack')
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// 这个在 npm run dev 和 npm run build 时候是不同的
var TARGET = process.env.npm_lifecycle_event
var APP_PATH = path.join(__dirname, '/src')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(APP_PATH, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [{
                loader: MiniCssExtractPlugin.loader
                }, 
                'css-loader'
              ]
            }
          ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ]
};