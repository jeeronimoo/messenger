const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: true
});

module.exports = {
    devtool: "eval",
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            declaration: false
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                gifsicle: {
                                    interlaced: true,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                }
                            }
                        }
                    },
                ]

            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.css' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        htmlPlugin,
    ]
};