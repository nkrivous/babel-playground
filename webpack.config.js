const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = { 
    entry: './index.js',
    module: { 
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    optimization: {
        minimize: true,
        sideEffects: false,
		minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                    },
                    dead_code: true,
                    },
                }
            )
        ]
    },
   mode: "production"
}