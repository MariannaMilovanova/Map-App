const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');
const vars = require('../env');

const GLOBALS = {
    "process.env": {
        "NODE_ENV": JSON.stringify('development'),
        "KEY_MAP": JSON.stringify(vars.KEY_MAP),
        "OAuth_CLIENT_ID": JSON.stringify(vars.OAuth_CLIENT_ID),
        "OAuth_SECRET": JSON.stringify(vars.OAuth_SECRET),
        "FSQ_CLIENT_ID": JSON.stringify(vars.FSQ_CLIENT_ID),
        "FSQ_SECRET": JSON.stringify(vars.FSQ_SECRET)
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = merge(config, {
    debug: true,
    cache: true,
    devtool: 'cheap-module-eval-source-map',
    entry: {
        application: [
            'webpack-hot-middleware/client',
            'react-hot-loader/patch',
            'development'
        ],
        vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(GLOBALS)
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, '../src/javascripts'),
                    path.resolve(__dirname, '../src/styles'),
                ],
                loaders: [
                    'style',
                    'css',
                    'postcss',
                    {loader: 'sass', query: {outputStyle: 'expanded'}}
                ]
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            }
        ]
    }
});
