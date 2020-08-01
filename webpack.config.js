const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "production",
  entry: {
    app: path.join(__dirname, 'src') + '/index.ts'
  },
  output: {
    filename: './js/[name].js',
    path: path.join(__dirname,'./build')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      hash: false,
      template: `./index.html`,
      filename: `./index.html`,
    })
  ]
}