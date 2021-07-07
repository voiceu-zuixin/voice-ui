import React from 'react'
import Demo from '../helper/demo'
import IconExample from './icon.example'

const code = require('!!raw-loader!./icon.example.jsx')


export default function IconDemo() {
    return (
        <div className='doc'>
            <div className='doc-content'>
                <h1 className='doc-title'>
                    <span>图标 Icon</span>
                </h1>
                <p className='doc-introduction'>语义化的矢量图形，提供常用图标</p>
                <h2 className='doc-h2'>演示</h2>
                <div className='display'>
                    <div className='display-card'>
                        <Demo code={code.default}>
                            <IconExample />
                        </Demo>
                    </div>
                    {/* <div className='display-card'>
                        <Demo code={code.default}>
                            <IconExample />
                        </Demo>
                    </div> */}
                    {/* <div className='display-card'>
                        <Demo code={code.default}>
                            <IconExample />
                        </Demo>
                    </div> */}
                </div>
            </div>

            <div className="doc-aside">
                <div>个人简历</div>
                <div>多轨音乐编辑器</div>
                <div>电商后台管理系统</div>
            </div>
        </div>
    )
}
