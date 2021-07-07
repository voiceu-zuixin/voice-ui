import React from 'react'
import Icon from './icon'

const IconExample: React.FunctionComponent = () => {
    return (
        <div>
            <span style={{ marginRight: '10px' }}>
                <Icon name='alipay' />
            </span>
            <span style={{ marginRight: '10px' }}>
                <Icon name='wechat' />
            </span>
            <Icon name='qq' />
            <span style={{ marginRight: '10px' }}>
            </span>
            <span style={{ marginRight: '10px' }}>
            </span>
            <Icon name='guitar' />
            <Icon name='facebook' />
            <Icon name='twitter' />
            <Icon name='weibo' />
            <Icon name='call' />
        </div>
    )
}

export default IconExample
