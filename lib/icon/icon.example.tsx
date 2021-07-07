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
            <span style={{ marginRight: '10px' }}>
                <Icon name='qq' />
            </span>
            <span style={{ marginRight: '10px' }}>
                <Icon name='guitar' />
            </span>
            <span style={{ marginRight: '10px' }}>
                <Icon name='facebook' />
            </span>
            <span style={{ marginRight: '10px' }}>
                <Icon name='twitter' />
            </span>
            <span style={{ marginRight: '10px' }}>
                <Icon name='weibo' />
            </span>
            <span style={{ marginRight: '10px' }}>
                <Icon name='call' />
            </span>
        </div>
    )
}

export default IconExample
