var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config');

new WebpackDevServer(webpack(config),{
    publicPath: config.output.publicPath,
    hot: config.server.hot,
    historyApiFallback: config.server.historyApiFallback,
    contentBase: config.server.contentBase
}).listen(config.server.port, config.server.url, function(err, result){
    if(err) {
        console.log(err);
    }
    console.log('Listening at ' + config.server.url + ':' + config.server.port);
});
