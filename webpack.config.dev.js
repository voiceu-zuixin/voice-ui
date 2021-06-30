// webpack的生产模式下配置文件
const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Object.assign的第一个参数会把后面参数复制进第一个参数
module.exports = Object.assign({},base,{
    // 配置mode环境。生产环境是production上线给用户用，会压缩代码，超过244k会警告，开发环境是development
    mode: 'development',
    // 入口文件,键名index就是外部要找的根目录下的文件名,默认找html后缀
    // 键值就是要转换的那个文件的地址，经过webpack的转换，写进index.html里面
    // 配置plugin
    plugins: [
        // 用于生成html里面的script src标签，引入经过转换的ts文件
        new HtmlWebpackPlugin({
            title: 'FunUI - React',
            // 引入进index.html文件里
            template: 'index.html'
        })
    ],

})