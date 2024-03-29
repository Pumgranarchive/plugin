var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');

var dev = process.env.NODE_ENV === 'DEV' ? true : false,
    debug = process.env.DEBUG === 'true' ? true : false,
    chrome = process.env.NODE_ENV === 'CHROME' ? true : false,
    production = chrome ? true : false;

module.exports = {
    devTools: dev ? 'eval-source-map' : '',
    server: {
        port: 8000,
        url: 'localhost',
        hot: true,
        historyApiFallback: true
    },
    entry: production ? {
        'app.js': './src/app',
        'popup.js': './src/popup'
    } : {
        'app.js': ['webpack-hot-middleware/client', './src/app'],
        'popup.js': ['webpack-hot-middleware/client', './src/popup']
    },
    output: {
        path: chrome ? path.join(__dirname, 'chrome_extension') : path.join(__dirname, '__build__'),
        filename: '[name]',
        publicPath: chrome ? 'chrome-extension://__MSG_@@extension_id__/' : '/__build__/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        modulesDirectories: [
            'src/web_modules',
            'node_modules',
            'src/assets',
            'src/assets/stylesheets/base',
            'src/scripts',
            'src/scripts/containers'
        ]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.json?$/,
            loader: 'file?name=[name].[ext]'
        },
        {
            test: /\.(scss|css)$/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&' +
                      'includePaths[]=' +
                        (path.resolve(__dirname, './src/assets/fonts/')) + '&' +
                      'includePaths[]=' +
                        (path.resolve(__dirname, './src/assets/stylesheets/')) + '&' +
                      'includePaths[]=' +
                        (path.resolve(__dirname, './src/assets/images/'))
        )},
        {
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            loaders: [
              'url?limit=1000&name=[name].[ext]',
              'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]
        },
        {
            test: /.*\.(otf|ttf|woff)$/i,
            loader: 'url?limit=1500&name=[name].[ext]'
        },
        {
            test: /\.html?$/,
            loader: 'file?name=[name].[ext]'
        }]
    },
    plugins: [
        new NyanProgressPlugin(),
        new ExtractTextPlugin('[name].css', {disable: !production}),
        new webpack.DefinePlugin({
           __PROD__: production,
           __DEV__: dev,
           __DEBUG__: debug,
           'process.env': {
               'NODE_ENV': JSON.stringify(production ? 'production' : 'dev')
           }
         })
    ].concat(
        production ? [
            new webpack.optimize.UglifyJsPlugin()
        ] : [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    ),
    postcss: function(){
        return [
            require('autoprefixer-core')({ browsers: ['last 2 versions'] }),
            require('postcss-initial')
        ];
    }
};
