const path = require('path');

module.exports = {
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
            }
        ],
    }
};
