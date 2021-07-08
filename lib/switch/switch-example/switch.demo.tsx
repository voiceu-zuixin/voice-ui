import React from 'react'
import Demo from '../../helper/demo'
import SwitchExample1 from './switch.example.1'
import SwitchExample2 from './switch.example.2'



export default function SwitchDemo() {
  return (
    <div className='doc'>
      <div className='doc-content'>
        <h1 className='doc-title'>
          <span>开关 Switch</span>
        </h1>
        <p className='doc-introduction'>一个很严肃的开关 [○･｀Д´･ ○]</p>
        <h2 className='doc-h2'>演示</h2>
        <div className='display'>
          <div className='display-card'>
            <Demo
              title='基础用法'
              code={require('!!raw-loader!./switch.example.1.jsx').default} >
              <SwitchExample1 />
            </Demo>
          </div>
          <div className='display-card'>
            <Demo
              title='设置大小'
              code={require('!!raw-loader!./switch.example.2.jsx').default} >
              <SwitchExample2 />
            </Demo>
          </div>
        </div>

        <h2 className='doc-h2'>Props</h2>
        <p className='doc-introduction'>可开可关，可大可小</p>
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
                <td>checked</td>
                <td>状态</td>
                <td>
                  <code >boolean</code>
                </td>
                <td>
                  <code >true | false</code>
                </td>
                <td>
                  <code >true</code>
                </td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否可选</td>
                <td>
                  <code >boolean</code>
                </td>
                <td>
                  <code >true | false</code>
                </td>
                <td>
                  <code >true</code>
                </td>
              </tr>
              <tr>
                <td>size</td>
                <td>大小</td>
                <td>
                  <code >string</code>
                </td>
                <td>
                  <code >undefined | 'lg' | 'sm'</code>
                </td>
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
