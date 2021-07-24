const htmlplugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
    mode: "development",
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: { minimize: true }
            }
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader"

            }
            ]
        }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
    },
    plugins: [
        new htmlplugin(
            {
                template: "./src/index.html",
                filename: "./index.html"
            }
        )
    ]

}