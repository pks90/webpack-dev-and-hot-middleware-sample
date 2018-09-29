const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?http://localhost:8080&timeout=20000', './src/login/app.js'
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [

    new webpack.HotModuleReplacementPlugin(),

    new CopyWebpackPlugin([
      {
        from: './src/images/',
        to: 'images/',
        force: true
      },
      {
        from: './node_modules/bootstrap/fonts/',
        to: 'node_modules/bootstrap/fonts/',
        force: true
      }
    ]),

    new HtmlWebpackPlugin({
      filename: 'login/login.html',
      template: './src/login/login.html',
      inject: true
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '../../node_modules/bootstrap/fonts/[name].[ext]'
          }
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '../images/[name].[ext]'
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            name: '../*/[name].[ext]'
          }
        }
      }
    ]
  }
}
