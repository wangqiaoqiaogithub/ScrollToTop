const path = require('path');
const HtmlWbapckPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './src /index.html'
    },
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'   ,
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules:[
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name]-[hash:5].[ext]",
                            fallback: 'file-loader',
                            limit: 5000,
                            outputPath: 'fonts/'//解析打包后输出的文件目录
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWbapckPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'mian.css'
        })
    ]
}