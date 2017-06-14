const loaders = require('./loaders');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
var StringReplacePlugin = require("string-replace-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var API_KEY = process.env.npm_config_apikey;

module.exports = {
    entry: {
        polyfills: './src/setup/polyfills.ts',
        app: './src/setup/prod.bootstrap.ts',
        css: './src/styles/styles.scss'
    },
    output: {
        filename: '[name].js',
        path: './dist',
        publicPath: '/'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    node: {
        net: "empty",
        tls: "empty",
        fs: "empty"
    },
    devtool: false,
    debug: true,
    plugins: [
        
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                screw_ie8: true,
                dead_code: true,
                drop_console: true
            },
            mangle: {
                screw_ie8: true,
                dead_code: true
            }
        }),
        new StringReplacePlugin(),
        new CopyWebpackPlugin([
            {
                from: 'node_modules/froala-editor/css/',
                to: 'assets/froala-editor/css/',
            },
            {
                from: 'node_modules/font-awesome/css/font-awesome.min.css',
                to: 'assets/font-awesome/css/font-awesome.min.css',
            },
            {
                from: 'node_modules/font-awesome/fonts',
                to: 'assets/font-awesome/fonts'
            },
            {
                from: 'src/assets/icons',
                to: 'assets/icons'
            }
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'app', 'css'].reverse()
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true,
            chunksSortMode: 'dependency'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    module: {
        loaders: loaders.concat(
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /configuration.ts$/,
                loader: StringReplacePlugin.replace({
                    replacements: [
                        {
                            pattern: '%API_KEY%',
                            replacement: function () {
                                return API_KEY
                            }
                        }
                    ]
                })
            }
        )
    }
};