const webpack = require("webpack");

module.exports = {
  module: {
    rules: [{ test: /\.png$/, use: "file-loader" }],
  },
};
