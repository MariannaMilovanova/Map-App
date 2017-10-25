const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');

const GLOBALS = {
    "process.env": {
        "NODE_ENV": JSON.stringify('development'),
        "KEY_MAP": JSON.stringify("AIzaSyDk7wxnvxDkzmojN_3ZRtTbl3WEXhRUjFA"),
        "OAuth_CLIENT_ID": JSON.stringify("144480727570-nets66ahop6t2fpff8h6qmj7guv44vqv.apps.googleusercontent.com"),
        "OAuth_SECRET": JSON.stringify("VEXgb4zLi2u7SB37mk8r-1ly"),
        "FSQ_CLIENT_ID": JSON.stringify("FQH2NY2X2HZSLE4ZGZHGZA1QKHXQMORQBZBAGYIMHE0B3H0N"),
        "FSQ_SECRET": JSON.stringify("CFBEJZRCRT35A01121FBIFI4GFQLHOWUUALYUKVX2ZTMUQWY")
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
