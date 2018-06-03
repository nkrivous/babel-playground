const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { 
    entry: './index.js',
    module: { },
   plugins: [new HtmlWebpackPlugin()]
}