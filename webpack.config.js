const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

let mode = 'development';
let target = 'web';

if(process.env.NODE_ENV === 'production'){
    mode = 'production';
    target = 'browserslist';
}

module.exports = {
  mode: mode,
  target: target,
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|gif|jpe?g|svg|webp)$/i,
        type: "asset",
        parser:{
          dataUrlCondition: {
            maxSize: 200 * 1024,
          }
        }
      },
      {
        test:/\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s[ac]|c)?ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    hot: true,
  },
}