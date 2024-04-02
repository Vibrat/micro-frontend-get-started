const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack');
const { ModuleFederationPlugin } =  require("webpack").container; 

const config = {
  entry: {
    polyfill: 'babel-polyfill',
    store: './src/store.ts',
    app: ['./src/index.ts'],
    app2: ['./src/addon.ts'],
  },
  output: {
    path:  __dirname + '/build',
    filename: '[name].[contenthash].bundle.js'
  },
  devtool: "inline-source-map",
  devServer: {
    hot: false
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: 'ts-loader',
        exclude: path.resolve(__dirname, 'node_modules')
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
      name: "app1",
      filename: "remote.js",
      exposes: {
        "./store": "./src/store"
      },
      remotes: {
        app3: "app3@http://localhost:3002/remote.js",
      },
      shared: {
        react: {singleton: true}, 
        "react-dom": {singleton: true},
        'babel-polyfill': { singleton: true, eager: true }
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html")
    }),
    new Dotenv()
  ]
}

module.exports = config