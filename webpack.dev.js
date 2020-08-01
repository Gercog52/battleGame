const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.config.js");

const devWebpackConfig = merge.merge(base, {
  output: {
    publicPath: "/",
    path: path.join(__dirname, './build'),
  },
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname,'./build'),
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  watch: true,
});

module.exports = new Promise((res) => {
  res(devWebpackConfig);
});