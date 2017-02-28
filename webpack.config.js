var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/app.js',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel'
        }, {
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, 'js'),
            ],
            loaders: ['react-hot', 'babel'],
        },
            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css?modules&localIdentName=[local]_[hash:base64:3]', 'less']
            },
        ],
    },
    resolve: {
        alias: {
            'react': path.join(__dirname, 'node_modules', 'react'),
            views: path.join(__dirname, 'src/views'),
            style: path.join(__dirname, 'src/styles'),
            components: path.join(__dirname, 'src/components'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
            layouts: path.join(__dirname, 'src/layouts')
        },
        extensions: ['', '.js', '.jsx', '.scss', '.css'],
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};
