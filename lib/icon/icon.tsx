import React from 'react'
import './importIcons'
// import '../icons/wechat.svg'
// import '../icons/alipay.svg'
// import '../icons/qq.svg'
// import '../icons/baidu.svg'
// import '../icons/csdn.svg'

import classes from '../helper/classes'
import './icon.scss'


// 声明Icon组件接收的类型
// 这个继承的含义是 继承于React内置的SVGAttributes，
// 然后这个SVGAttributes可以有onClick等一系列事件，并且接收一个参数
// 这个参数就是指定什么元素能响应这些事件，所以就不需要单独每个写onClick事件了
interface IconProps extends React.SVGAttributes<SVGElement> {
    // icon的名字
    name: string;
    // onClick是鼠标点击svg标签的事件
    // onClick: React.MouseEventHandler<SVGElement>
    // onClick:(e:React.MouseEvent)=>void
}

// 最好用箭头函数的形式，方便ts进行声明
const Icon: React.FunctionComponent<IconProps> = ({
    className,
    name,
    ...restProps
}) => {

    // 分离出className和其余props,可以直接写到括号里面
    return (
        <svg
            className={classes('fun-ui-icon', className)}
            // {}是表示用js语法
            {...restProps}

        // onClick={props.onClick}
        // onMouseLeave={props.onMouseLeave}
        // onMouseEnter={props.onMouseEnter}
        >
            
            {/* 这里的wechat是icons文件夹下svg文件的文件名 */}
            <use xlinkHref={`#${name}`} />
        </svg>
    )
}

export default Icon