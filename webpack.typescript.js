const path = require('path');

module.exports = {
    devtool: "source-map",
    context: path.resolve(__dirname),
    entry: {
        default: './index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: [ '.js', '.ts', '.tsx' ],
        modules: [ 'node_modules' ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader'
                }],
            },
            {
                test: /\.js$/,
                exclude: /node_modules[\/|\\]core-js/,
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
