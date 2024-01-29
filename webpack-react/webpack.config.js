const webpack = require('webpack'); // CommonJS module system
const path = require('path');

module.exports = function (__env, argv) {
    // if(argv.mode === 'production') {

    // }
    return {
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
        })],
        devServer: {
            port: 1234
        }
    }
}