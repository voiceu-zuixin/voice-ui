// webpack的配置文件
const path = require('path')
module.exports = {
    // 配置mode环境。开发的时候就是production，后面是development
    mode:'production',
    // 入口文件
    entry: {
        index:'./lib/index.tsx'
    },
    // 输出目录，要用到绝对路径，所以在上方引入path模块
    output:{
        // 路径
        path:path.resolve(__dirname,'dist/lib'),
        // 库的名字
        library:'FunUI',
        // 库的目标格式 , 这个是跟cmd，amd类似的一种模块化
        libraryTarget:'umd'
    },
    // 配置loader
    module:{
        rules:[
            {
                //  //表示正则， .要用转义\  ?表示x可有可无  $表示以这个结尾
                test:/\.tsx?$/,
                // loader有多种多样，这里用的是其中一个比较好的，一般都是直接输名字然后--dev安装
                loader:'awesome-typescript-loader'
            }
        ]
    }
}