const path = require('path');

module.exports = {
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
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env"],
                            ["@babel/preset-react"]
                        ],
                    }
                }],
            }
        ],
    }
};
