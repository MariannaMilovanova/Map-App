const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./webpack.config.base');
const vars = require('../env');

const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        "KEY_MAP": JSON.stringify(vars.KEY_MAP),
        "OAuth_CLIENT_ID": JSON.stringify(vars.OAuth_CLIENT_ID),
        "OAuth_SECRET": JSON.stringify(vars.OAuth_SECRET),
        "FSQ_CLIENT_ID": JSON.stringify(vars.FSQ_CLIENT_ID),
        "FSQ_SECRET": JSON.stringify(vars.FSQ_SECRET)
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
};

module.exports = merge(config, {
    debug: false,
    devtool: 'cheap-module-source-map',
    entry: {
        application: 'production',
        vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, '../src/images'),
                to: 'images'
            }
        ]),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                'screw_ie8': true
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new ExtractTextPlugin({
            filename: 'css/app.css',
            allChunks: true
        })
    ],
    module: {
        noParse: /\.min\.js$/,
        loaders: [
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, '../src/javascripts'),
                    path.resolve(__dirname, '../src/styles'),
                ],
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: [
                        {loader: 'css', query: {sourceMap: true}},
                        'postcss',
                        {loader: 'sass', query: {outputStyle: 'compressed'}}
                    ]
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: ['css', 'postcss']
                })
            }
        ]
    },
});
