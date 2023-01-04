const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: "./assets/js/main.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            buffer: require.resolve("buffer"),
        },
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {},
                    compress: {},
                    mangle: {
                        properties: {
                            regex: /^_/,
                        },
                    },
                },
            }),
        ],
    },
};
