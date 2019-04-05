const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    devtool: 'source-map',

    devServer: {
        contentBase: './dist',
        publicPath: '/',
        port: 8080,
        watchContentBase: true,
        compress: true,
        historyApiFallback: true,
        disableHostCheck: true,
        open: true,
        // host: 'sandbox.dev' // this requires pointing this host to 127.0.0.1 in /etc/hosts
    },

    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.sass$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ]
}
