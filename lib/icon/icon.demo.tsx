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
                        <Demo code={code.default} title='基础用法'>
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

                <h2 className='doc-h2'>Props</h2>
                <p className='doc-introduction'>大小默认为 30px ✖ 30px ，如需改变，请通过className自定义</p>
                <div className="doc-props">
                    <table className='doc-props-table'>
                        <thead>
                            <tr>
                                <th>参数</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>可选值</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>name</td>
                                <td>图标名称</td>
                                <td>
                                    <code >string</code>
                                </td>
                                <td>——</td>
                                <td>
                                    <code >undefined</code>
                                </td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>自定义样式</td>
                                <td>
                                    <code >string</code>
                                </td>
                                <td>——</td>
                                <td>
                                    <code >undefined</code>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
