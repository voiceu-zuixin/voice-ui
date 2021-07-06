// webpack的配置文件
const path = require('path')

module.exports = {
    // 配置mode环境。生产环境是production上线给用户用，会压缩代码，超过244k会警告，开发环境是development
    // mode: 'development',
    // 入口文件,键名index就是外部要找的根目录下的文件名,默认找html后缀
    // 键值就是要转换的那个文件的地址，经过webpack的转换，写进index.html里面
    entry: {
        index: './lib/index.tsx'
    },
    // 支持的后缀，不然在import的时候，不写tsx就找不到tsx文件
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    // 输出目录，要用到绝对路径，所以在上方引入path模块
    output: {
        // 路径
        path: path.resolve(__dirname, 'dist/lib'),
        // 库的名字
        library: 'voiceUI',
        // 库的目标格式 , 这个是跟cmd，amd类似的一种模块化
        libraryTarget: 'umd'
    },
    // 配置loader
    module: {
        rules: [
            {
                //  //表示正则， .要用转义\  ?表示x可有可无  $表示以这个结尾
                test: /\.tsx?$/,
                // loader有多种多样，这里用的是其中一个比较好的，一般都是直接输名字然后--dev安装
                // loader: 'awesome-typescript-loader',
                // awesome-typescript-loader会报错,改用ts-loader
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                // 处理svg图标
                test: /\.svg$/,
                // 这个loader会把所有svg弄到index.html最上面，root的div之前
                loader:'svg-sprite-loader',
            },
            {
                // scss的loader,支持scss或sass
                // test:/\.s([ac])ss$/,
                test:/\.s[ac]ss$/,
                // 使用顺序是从右往左，pop出去的，先sass-loader
                use:['style-loader','css-loader','sass-loader']
            },
            {
              test: /\.(png|jpg|jpeg|gif)$/,
              use: [
                'file-loader'
              ]
            }
        ]
    },
    // // 配置plugin
    // plugins: [
    //     // 用于生成html里面的script src标签，引入经过转换的ts文件
    //     new HtmlWebpackPlugin({
    //         title: 'FunUI - React',
    //         // 引入进index.html文件里
    //         template: 'index.html'
    //     })
    // ],
    // // 用于将react包排在外面，让其他开发者自己下载，不然这个太大了
    // externals: {
    //     react: {
    //         // 对应的模块化标准，该怎么引用，比如require('xxx')，这个xxx就是下面的'react'
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React',
    //     },
    //     'react-dom': {
    //         commonjs: 'react-dom',
    //         commonjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'ReactDOM',
    //     },
    // },
}