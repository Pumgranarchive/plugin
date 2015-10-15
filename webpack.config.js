var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');

var dev = (process.env.NODE_ENV === 'DEV' ? true : false),
    debug = (process.env.DEBUG === 'true' ? true : false),
    chrome = (process.env.NODE_ENV === 'CHROME' ? true : false),
    production = (chrome ? true : false);

module.exports = {
    devTools: (dev ? 'eval-source-map' : ''),
    server: {
        port: 8000,
        url: 'localhost',
        hot: true,
        historyApiFallback: true
    },
    entry: production ? ['./src/index'] :
        ['webpack-hot-middleware/client', './src/index'],
    output: {
        path: chrome ? path.join(__dirname, 'chrome_extension') : path.join(__dirname, '__build__'),
        filename: 'app.js',
        publicPath: (dev ? '/__build__/' : 'chrome-extension://__MSG_@@extension_id__/')
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
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        },
        {
            test: /\.json?$/,
            loaders: ['json']
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
              'url?limit=10000&name=[name].[ext]',
              'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]
        },
        {
            test: /.*\.(otf|ttf|woff)$/i,
            loader: 'url?limit=1500&name=[name].[ext]'
        }]
    },
    plugins: [
        new NyanProgressPlugin(),
        new ExtractTextPlugin('style.css', {disable: !production}),
        new webpack.DefinePlugin({
           __PROD__: production,
           __DEV__: dev,
           __DEBUG__: debug
         })
    ].concat(
        production ? [
            new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false
              }
            })
        ] : [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    ),
    postcss: function(){
        return [
            require('autoprefixer-core')({ browsers: ['last 2 versions'] })
        ];
    }

};
