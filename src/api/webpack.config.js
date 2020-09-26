const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    api: path.resolve("src/api/api.js")
  }
};