// webpack的生产模式下配置文件
const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Object.assign的第一个参数会把后面参数复制进第一个参数
module.exports = Object.assign({}, base, {
    // 配置mode环境。生产环境是production上线给用户用，会压缩代码，超过244k会警告，开发环境是development
    mode: 'development',
    // 入口文件,键名index就是外部要找的根目录下的文件名,默认找html后缀
    // 键值就是要转换的那个文件的地址，经过webpack的转换，写进index.html里面
    // 配置plugin
    // 开发环境下的entry是example.tsx
    entry: {
        index: './example.tsx'
    },
    plugins: [
        /* 
        将 webpack中`entry`配置的相关入口chunk  和  `extract-text-webpack-plugin`抽取的css样式  
        插入到该插件提供的`template`或者`templateContent`配置项指定的内容基础上生成一个html文件，
        具体插入方式是将样式`link`插入到`head`元素中，`script`插入到`head`或者`body`中。
        */
        // 可以生成创建html入口文件，比如单页面可以生成一个html文件入口
        // 用于生成html里面的script src标签，引入经过转换的ts文件
        new HtmlWebpackPlugin({
            title: 'FunUI - React',
            // index.html文件作为模板，所以会覆盖上面的title
            template: 'example.html'
        })
    ],

})