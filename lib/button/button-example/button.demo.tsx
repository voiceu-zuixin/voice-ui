import React from 'react';
import Demo from '../../helper/demo';
import ButtonExample from "./button.example"
import ButtonExample2 from "./button.example.2"
// const code = require('!!raw-loader!./button.example.jsx')

export default function ButtonDemo() {
    return (
        <div className='doc'>
            <div className='doc-content'>
                <h1 className='doc-title'>
                    <span>按钮 Button</span>
                </h1>
                <p className='doc-introduction'>按钮用于触发一个即时操作， 哪里不会点哪里</p>
                <h2 className='doc-h2'>演示</h2>
                <div className='display'>
                    <div className='display-card'>
                        <Demo
                            title='基础用法'
                            code={require('!!raw-loader!./button.example.jsx').default}>
                            <ButtonExample />
                        </Demo>
                    </div>
                    <div className='display-card'>
                        <Demo
                            title='配合 Icon'
                            code={require('!!raw-loader!./button.example.2.jsx').default}>
                            <ButtonExample2 />
                        </Demo>
                    </div>
                </div>

                <h2 className='doc-h2'>Props</h2>
                <p className='doc-introduction'>支持原生 button 的其他所有属性</p>
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
                                <td>type</td>
                                <td>按钮类型</td>
                                <td>
                                    <code >string</code>
                                </td>
                                <td>
                                    <code >dashed | primary | danger</code>
                                </td>
                                <td>
                                    <code >default</code>
                                </td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>图标名称</td>
                                <td>
                                    <code >string</code>
                                </td>
                                <td>
                                    <code >Icon.name</code>
                                </td>
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
                <div>技术博客</div>
            </div>
        </div>
    )
}
