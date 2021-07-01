import React from 'react'

// 声明Icon组件接收的类型
interface IconProps {
    name: string;
}

// 最好用箭头函数的形式，方便ts进行声明
const Icon:React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>{props.name}</span>
    )
}
export default Icon