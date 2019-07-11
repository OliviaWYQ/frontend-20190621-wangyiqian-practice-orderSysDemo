// eslint-disable-next-line no-unused-vars
var webpack = require("webpack");

module.exports = {
  entry: undefined,
  output: {
    pathinfo: true
  },
  // module: {
  //   //加载器配置
  //   loaders: [{ test: /\.js$/, loader: "babel-loader" }]
  // }
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
