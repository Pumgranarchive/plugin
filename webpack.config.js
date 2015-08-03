var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');

var debug = (process.env.DEBUG == 'true' ? true : false);
var dev = (process.env.NODE_ENV == 'DEV' ? true : false);
var production = (process.env.NODE_ENV == 'CHROME' ? true : false);
var chrome = (production ? true : false);

var entryFiles = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
];
var jsLoaders = ['react-hot', 'babel'];
if(production){
    entryFiles = [
        './src/index'
    ];
    jsLoaders = ['babel'];
}

module.exports = {
    server: {
        port: 3000,
        url: 'localhost',
        hot: true,
        historyApiFallback: true,
    },
    entry: entryFiles,
    output: {
        path: chrome ? path.join(__dirname, 'chrome_extension') : path.join(__dirname, '__build__'),
        filename: 'app.js',
        publicPath: chrome ? '' : '/__build__/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', 'ts'],
        modulesDirectories: [
            'src/web_modules',
            'node_modules',
            'src/assets',
            'src/scripts',
            'src/scripts/containers'
        ]
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: jsLoaders,
            include: path.join(__dirname, 'src')
        },{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        },{
            test: /\.(scss|css)$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=expanded&' +
                      'includePaths[]=' +
                        (path.resolve(__dirname, './src/assets/fonts/')) + '&' +
                      'includePaths[]=' +
                        (path.resolve(__dirname, './src/assets/stylesheets/')) + '&' +
                      'includePaths[]=' +
                        (path.resolve(__dirname, './src/assets/images/'))
        )},{
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            loaders: [
              'url?limit=10000&name=[name]-[sha512:hash:base64:7].[ext]',
              'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]
        },{
            test: /.*\.(ttf|woff)$/i,
            loader: 'url?name=[name].[ext]'
        }]
    },
    plugins: [
        new NyanProgressPlugin(),
        new ExtractTextPlugin('style.css', {disable: !production}),
        new webpack.DefinePlugin({
           __PROD__: production,
           __DEBUG__: debug,
           __DEV__: dev
         }),
    ].concat(
        production ? [
            new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false,
              },
            }),
        ] : [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    ),
    postcss : function(){
        var autoprefixer = require('autoprefixer-core');
        return [
            autoprefixer({ browsers: ['last 10 Chrome versions'] })
        ];
    }

};
