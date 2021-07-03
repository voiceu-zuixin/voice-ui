import React from 'react'
import Icon from './icon'

// types不能直接export default接着声明
const IconExample: React.FunctionComponent = () => {
    return (
        <div>
            <Icon name='alipay'/>
            <Icon name='wechat'/>
            <Icon name='qq'/>
        </div>
    )
}
export default IconExample