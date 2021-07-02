import React from 'react'
import './importIcons'
// import '../icons/wechat.svg'
// import '../icons/alipay.svg'
// import '../icons/qq.svg'
// import '../icons/baidu.svg'
// import '../icons/csdn.svg'

import './icon.scss'


// 声明Icon组件接收的类型
interface IconProps {
    name: string;
}

// 最好用箭头函数的形式，方便ts进行声明
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className='fun-ui-icon'>
            {/* 这里的wechat是icons文件夹下svg文件的文件名 */}
            <use xlinkHref={`#${props.name}`} />
        </svg>
    )
}

export default Icon