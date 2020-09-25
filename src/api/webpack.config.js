const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    api: path.resolve("src/api/api.coffee")
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: "coffee-loader"
      }
    ]
  },
  resolve: {
    extensions: [".coffee"]
  }
};