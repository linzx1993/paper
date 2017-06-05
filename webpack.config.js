/**
 * Created by linzx on 2017/6/5.
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry : "./main.js",
    output : {
        path: "./dist",
        //path.resolve(__dirname, "dist")
        filename: "[name]-[hash].js"
    },
    devtool: 'cheap-module-eval-source-map',//配置生成Source Maps，选择合适的选项
    module : {
        rules : [
            {
                test : /\.json/,
                loader : "json-loader"
            },
            {
                test : /\.js/,
                loader : "babel-loader",
                include: [
                    path.resolve(__dirname,"./dist/scripts")
                ],
                exclude: [
                  path.resolve(__dirname,"./node_modules")
                ],
                options: {
                    presets: ["es2015"]
                },
            },
            {
                test: /\.scss$/,
                use: [extractSass.extract({
                    use : [
                        {loader : "css-loader"},
                        {loader : "sass-loader",options : {sourceMap: true}},
                    ],
                    fallback: "style-loader"
                })]
            }
        ],
    },
    // postcss: [
    //     require('autoprefixer')
    // ],
    // plugins: [
    //     extractSass,
    //     new webpack.HotModuleReplacementPlugin()//热加载插件
    // ],
    // devServer: {
    //     contentBase: "./dist",//本地服务器所加载的页面所在的目录
    //     colors: true,//终端中输出结果为彩色
    //     historyApiFallback: true,//不跳转
    //     inline: true//实时刷新
    // }
};