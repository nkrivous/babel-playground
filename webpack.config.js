const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { 
    entry: './index.js',
    module: { rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }
    ]},
   plugins: [new HtmlWebpackPlugin()]
}