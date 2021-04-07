import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
    mode: 'production',
    devtool: 'source-map',
    target: 'web',
    entry: {
        main: path.resolve(__dirname, './src/index'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css"
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            // favicon: 'public/favicon.ico'
        })
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
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.ts', '.tsx'],
    }
};

export default config;
