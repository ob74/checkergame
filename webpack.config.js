const webpack = require('webpack');
const path = require('path');
const debug = process.env.NODE_ENV != "production";
const BUILD_DIR = path.resolve(__dirname, 'src/public/js');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
    entry: {
        lobby: APP_DIR + '/app.jsx',
        game: APP_DIR + '/game.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: debug ? [] : [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ]
};

module.exports = config;
