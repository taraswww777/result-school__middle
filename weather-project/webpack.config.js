const path = require("path");
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require('dotenv');
const {MODE, DEFAULT_PORT} = require("./webpack/constants");
const {devServer} = require("./webpack/dev-server");

const isProd = process.env.NODE_ENV === MODE.PROD;
const isDevServer = Boolean(process.env.isDevServer);

const DOT_ENV = isProd ? {} : dotenv.config({
    path: path.join(__dirname, '.env.development')
}).parsed;

const devConfig = isDevServer ? {
    devServer: devServer({
        port: DOT_ENV.PORT || DEFAULT_PORT
    })
} : {};

const stylesHandler = isProd ? MiniCssExtractPlugin.loader : "style-loader";

const plugins = [
    new HtmlWebpackPlugin({
        template: "public/index.html",
    }),
    isProd ? new MiniCssExtractPlugin() : undefined
].filter(v => v)

const baseConfig = {
    mode: isProd ? MODE.PROD : MODE.DEV,
    entry: './src/index.js',
    target: ['web', 'es5'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[hash].js',
        publicPath: '/',
        globalObject: 'this'
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
};

module.exports = merge([baseConfig, devConfig])
