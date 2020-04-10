const path = require('path');

module.exports = {
    devtool: "source-map",
    context: path.resolve(__dirname),
    entry: {
        default: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: [ '.js' ],
        modules: [ 'node_modules' ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/core-js/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    useBuiltIns: "entry",
                                    corejs: 3,
                                },
                            ],
                            ["@babel/preset-react"]
                        ],
                    }
                }],
            }
        ],
    }
};
