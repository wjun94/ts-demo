const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'js/index.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'env',
                                'stage-0',
                                'react'
                            ],
                            plugins: [
                                'transform-runtime'
                            ]
                        }
                    },
                    'awesome-typescript-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        port: 3000,
        open: true,
        compress: true,
    }
}