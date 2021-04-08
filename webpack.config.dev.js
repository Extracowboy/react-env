const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ESLintWebpackPlugin({
            extensions: ["js", "jsx", "ts", "tsx"]
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /(\.css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx'],
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        stats: 'minimal', // information when serving the app
        overlay: true, // overlay errors in the browser
        historyApiFallback: true, // all request will be send to index.html
        // for latest versions of chrome
        disableHostCheck: true,
        headers: {'Access-Control-Allow-Origin': '*'},
        https: false
    }
};
