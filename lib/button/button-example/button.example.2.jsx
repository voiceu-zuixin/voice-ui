import React, { Component } from 'react'
import { Button } from 'voice-ui'

export default class Demo extends Component {
    render() {
        return (
            <div>
                <Button icon="alipay">没钱了</Button>
                <Button icon="wechat">余额为 0</Button>
                <a href="https://blog.csdn.net/Voiceu?spm=1000.2115.3001.5343&type=blog" target="_blank"  >
                    <Button icon="csdn">康康我的博客，夹带私货</Button>
                </a>
            </div>
        )
    }
}
