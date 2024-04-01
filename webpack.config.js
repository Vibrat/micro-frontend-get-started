const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack');

const config = {
  entry: {
    polyfill: 'babel-polyfill',
    store: './src/store.ts',
    app: ['./src/m1.tsx'],
    app2: ['./src/m2.tsx'],
  },
  output: {
    path:  __dirname + '/build',
    filename: '[name]-bundle.js'
  },
  devtool: "inline-source-map",
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html")
    }),
    new Dotenv()
  ]
}

module.exports = config