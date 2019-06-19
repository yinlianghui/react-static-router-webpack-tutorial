var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


var config = {

    mode: 'production',

    devtool: 'source-map',

    entry: {
        app: './src/index.js',
        hot: 'webpack-hot-middleware/client'
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },

    // resolve: {
    //   extensions: ['', '.js']
    // },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Demo-APP4',
            template: 'index.html'
        }),
        new webpack.HashedModuleIdsPlugin(),
        // new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true)
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: [path.join(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }

    // module: {
    //   loaders: [
    //     {
    //       test: /\.js$/,
    //       loaders: ['react-hot', 'babel'],
    //       include: [path.join(__dirname, 'src')]
    //     },
    //     {
    //       test: /\.css$/,
    //       loader: ExtractTextPlugin.extract('style-loader','css-loader')
    //     }
    //   ]
    // }
}

module.exports = config


// const path = require('path');
// const webpack = require('webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserJSPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const devMode = process.env.NODE_ENV !== 'production';
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// module.exports = {
//     mode: 'production',
//     devtool: 'source-map',
//     entry: {
//         app: './src/index.js',
//         hot: 'webpack-hot-middleware/client'
//     },
//     optimization: {
//         minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
//     },
//     // plugins: [
//     //     new MiniCssExtractPlugin({
//     //         // Options similar to the same options in webpackOptions.output
//     //         // both options are optional
//     //         filename: devMode ? '[name].css' : '[name].[hash].css',
//     //         chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
//     //     }),
//     //     new CleanWebpackPlugin(),
//     //     new HtmlWebpackPlugin({
//     //         title: 'Progressive Web Application'
//     //     }),
//     //     new webpack.HashedModuleIdsPlugin()
//     // ],
//     plugins: [
//         new MiniCssExtractPlugin({
//             // Options similar to the same options in webpackOptions.output
//             // both options are optional
//             filename: '[name].css',
//             chunkFilename: '[id].css',
//         }),
//         new webpack.HotModuleReplacementPlugin(),
//         new HtmlWebpackPlugin({
//             title: 'Demo-APP4',
//             template: 'index.html'
//         }),
//         new webpack.HashedModuleIdsPlugin()
//     ],
//     // devServer: {
//     //     contentBase: './dist',
//     //     writeToDisk: true
//     // },
//     // module: {
//     //     rules: [
//     //         {
//     //             test: /\.css$/,
//     //             use: [MiniCssExtractPlugin.loader, 'css-loader'],
//     //         },
//     //     ],
//     // },
//     // output: {
//     //     filename: '[name].[contenthash].bundle.js',
//     //     // chunkFilename: '[name].[contenthash].bundle.js',
//     //     path: path.resolve(__dirname, 'dist'),
//     //     publicPath: '/'
//     // },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 use: ['babel-loader'],
//                 include: [path.join(__dirname, 'src')]
//             },
//             {
//                 test: /\.css$/,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader']
//             }
//         ]
//     },
//     output: {
//         filename: 'bundle.js',
//         path: path.join(__dirname, 'dist'),
//         publicPath: '/dist/'
//     }
// };
