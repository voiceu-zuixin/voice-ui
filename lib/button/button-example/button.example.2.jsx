import React, { Component } from 'react'
import { Button } from 'voice-ui'

export default class Demo extends Component {
    render() {
        return (
            <div>
                <Button icon="alipay">没钱了</Button>
                <Button icon="wechat">余额为 0</Button>
                <a href="https://xxx.com" target="_blank"  >
                    <Button icon="csdn">康康我的博客，夹带私货</Button>
                </a>
            </div>
        )
    }
}