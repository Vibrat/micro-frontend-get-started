const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack');
const { ModuleFederationPlugin } = require('webpack').container;

const config = {
  entry: {
    main: './src/index.ts',
  },
  output: {
    path:  __dirname + '/build',
    filename: '[name].bundle.js'
  },
  devtool: "inline-source-map",
  devServer: {
    port: 3001,
    hot: false
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: 'ts-loader',
        exclude: path.resolve(__dirname,'node_modules')
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },      
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'styleguide',
      filename: 'remote.js',
      exposes: {
        './base': './src/index.ts',
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html")
    }),
    new Dotenv()
  ]
}

module.exports = config