var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');

var production = process.argv.indexOf("--production") > -1;
var chrome = process.argv.indexOf("chrome") > -1;
var outputPath = '__build__';
var outputPublicPath = '/__build__/';
if(chrome){
    outputPath = 'chrome_extension';
    outputPublicPath = '';
}

console.log(outputPublicPath);

module.exports = {
    server: {
        port: 3000,
        url: 'localhost',
        hot: true,
        historyApiFallback: true,
    },
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, outputPath),
        filename: 'app.js',
        publicPath: outputPublicPath
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
            loaders: ['react-hot', 'babel'],
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new NyanProgressPlugin(),
        new ExtractTextPlugin('style.css', {disable: !production})
    ],
    postcss : function(){
        var autoprefixer = require('autoprefixer-core');
        return [
            autoprefixer({ browsers: ['last 2 versions'] })
        ];
    }

};
