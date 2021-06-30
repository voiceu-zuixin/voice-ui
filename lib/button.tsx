// 此处为什么要引入React，因为组件内部的div等标签，是React的语法糖
// 内部会调用React.createElement,不引入就会报错
import React from 'react'

function Button(){
    return(
        <div>
            按钮
        </div>
    )
}

export default Button