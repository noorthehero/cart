const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './assets/js/app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                // use: [
                //     {
                //         loader: 'img-optimize-loader',
                //         options: {
                //             compress: {
                //               mode: 'high',
                //               disableOnDevelopment: true,
                //             },
                //         },
                //     }
                // ],
                generator: {
                    filename: '../images/[name][ext]',
                }
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '../fonts/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/app.bundle.css"
        })
    ],

}
