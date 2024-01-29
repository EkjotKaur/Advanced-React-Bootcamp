const webpack = require('webpack'); // CommonJS module system
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = function (__env, argv) {
    // if(argv.mode === 'production') {

    // }
    return {
        devtool: 'cheap-module-source-map',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.[contenthash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        }),
            // new CleanWebpackPlugin()
        ],
        devServer: {
            port: 1234
        }
    }
}