var path = require('path'),
    webpack = require('webpack'),
    pxtorem = require('postcss-pxtorem'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');

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
        path: path.join(__dirname, '__build__'),
        filename: 'index.js',
        publicPath: '/__build__/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', 'ts'],
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
            loader: 'typescript-loader'
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!cssnext')
        },{
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]
        },{
            test: /.*\.(ttf|woff)$/i,
            loader: 'file'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new NyanProgressPlugin(),
        new ExtractTextPlugin('style.css',{disable: true})
    ],
    cssnext: {
        browsers: 'last 2 versions',
        import: {
            path: ['./src/assets/stylesheets/', './src/assets/fonts/']
        },
        url: {
            basePath: ['./src/assets/images/']
        }
    },
    postcss : function(){
        return [require('postcss-nested'), require('postcss-simple-vars'), require('postcss-map'), pxtorem({
            media_query: true,
            prop_white_list: ['font-size', 'line-height', 'letter-spacing', 'margin',
                'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding',
                'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'width',
                'height', 'top', 'left', 'bottom', 'right', 'border-radius', 'border',
                'border-top', 'border-right', 'border-bottom', 'border-left', 'max-width',
                'max-height', 'background-size', 'background-position', 'transform']
        })];
    }

};
