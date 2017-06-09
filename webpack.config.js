/**
 * Created by linzx on 2017/6/5.
 */
const path = require('path');
const webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');          //html模板模块;
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports  = {
    entry : "./main.js",
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[hash].js"
    },
    // devtool: 'cheap-module-eval-source-map',//配置生成Source Maps，选择合适的选项
    module : {
        rules : [
            // //json
            // {
            //     test : /\.json$/,
            //     loader : "json-loader"
            // },
            //js
            {
                test : /\.js$/,
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
            //image
            {
                test: /\.(png|jpg|gif)$/,
                use :[
                    //加载url-loader 同时安装 file-loader;
                    {
                        loader : 'url-loader',
                        options : {
                            //小于10000K的图片文件转base64到css里,当然css文件体积更大;
                            limit : 10000,
                            name : './[name]-[hash].[ext]'
                        }
                    },
                    //压缩图片(另一个压缩图片：image-webpack-loader);
                    {loader : "img-loader?minimize&optimizationLevel=5&progressive=true"}
                ]
            },
            //css
            {
                test: /\.css$/,
                        // use: [ 'style-loader', 'css-loader' ],
                //加载css-loader、postcss-loader（编译顺序从下往上）转译css
                        use: ExtractTextPlugin.extract({
                                use: [
                                    {
                                        loader : 'css-loader?importLoaders=1',
                                    },
                                    {
                                        loader : "postcss-loader",
                                        options : {
                                            plugins : function () {
                                                return [
                                                    require('autoprefixer')({
                                                        browsers: ['ios >= 7.0']
                                                    })
                                                ]
                                            }
                                        }
                                    }
                                ]
                        })
            },
            //scss
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader?importLoaders=1',
                        },
                        {
                            loader: 'postcss-loader',
                            //配置参数;
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')({
                                            browsers: ['ios >= 7.0']
                                        })
                                    ];
                                }
                            }
                        },
                        {
                            //加载sass-loader同时也得安装node-sass;
                            loader: "sass-loader",
                            //配置参数;
                            options: {
                                //sass的sourceMap
                                sourceMap: true,
                                //输出css的格式两个常用选项:compact({}行), compressed(压缩一行)
                                outputStyle: 'compact'
                            }
                        }

                    ]

                })
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template : __dirname + "/index.html"
        }),
        // extractSass,
        new ExtractTextPlugin({
           filename : '[name].css'                //设置最后css路径、名称;
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
};