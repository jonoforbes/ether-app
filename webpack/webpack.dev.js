const loaders = require('./loaders');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
var StringReplacePlugin = require("string-replace-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var API_KEY = process.env.npm_config_apikey;

module.exports = {
    entry: {
        'polyfills': './src/setup/polyfills.ts',
        'app': './src/setup/dev.bootstrap.ts',
        'css': './src/styles/styles.scss',
        'vendor': [
            '@ngrx/core',
            '@ngrx/store',
            '@ngrx/store-devtools',
            '@ngrx/store-log-monitor',
            '@angular/common',
            '@angular/compiler',
            '@angular/forms',
            '@angular/core',
            '@angular/router',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            'rxjs/Observable',
            'rxjs/Subject',
            'rxjs/BehaviorSubject',
            'rxjs/ReplaySubject',
            'rxjs/Subscription',
            'rxjs/add/operator/map',
            'rxjs/add/operator/finally',
            'rxjs/add/operator/filter',
            'rxjs/add/operator/take',
            'rxjs/add/operator/mergeMap',
            'rxjs/add/operator/distinctUntilChanged',
            'rxjs/add/operator/retryWhen',
            'rxjs/add/operator/debounceTime',
            'rxjs/add/operator/do',
            'rxjs/add/operator/switchMap',
            'rxjs/add/observable/combineLatest',
        ]
    },
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    node: {
        net: "empty",
        tls: "empty",
        fs: "empty"
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js']
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
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
            name: ['polyfills', 'app', 'css', 'vendor'].reverse()
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new OpenBrowserPlugin({url: 'http://localhost:8080'})
    ],
    module: {
        loaders: loaders.concat([
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
        ])
    }
};