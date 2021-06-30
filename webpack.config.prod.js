// webpack的开发者模式下的配置文件
const base = require('./webpack.config')
module.exports = Object.assign({},base,{
    // 配置mode环境。生产环境是production上线给用户用，会压缩代码，超过244k会警告，开发环境是development
    mode: 'development',
    // 入口文件,键名index就是外部要找的根目录下的文件名,默认找html后缀
    // 键值就是要转换的那个文件的地址，经过webpack的转换，写进index.html里面
    // 用于将react包排在外面，让其他开发者自己下载，不然这个太大了
    externals: {
        react: {
            // 对应的模块化标准，该怎么引用，比如require('xxx')，这个xxx就是下面的'react'
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
})