const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {index: path.resolve(__dirname, "src", "App.tsx")},
    output: {
        path: path.resolve(__dirname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    devServer: {
        compress: true,
        port: 9000,
        open: true
    },
    devtool: "inline-source-map"
};
