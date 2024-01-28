const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.tsx',
        background: './src/background.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_module/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name]bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}