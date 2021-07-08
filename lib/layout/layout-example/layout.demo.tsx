import React from 'react';
import Demo from '../../helper/demo';
import LayoutExample1 from "./layout.example.1"
import LayoutExample2 from "./layout.example.2"
import LayoutExample3 from "./layout.example.3"
import LayoutExample4 from "./layout.example.4"

export default function LayoutDemo() {
  return (
    <div className='doc'>
      <div className='doc-content'>
        <h1 className='doc-title'>
          <span>布局 Layout</span>
        </h1>
        <p className='doc-introduction'>提供四种比较经典的布局</p>
        <h2 className='doc-h2'>演示</h2>
        <div className='display'>
          <div className='display-card'>
            <Demo
              title='经典布局'
              code={require('!!raw-loader!./layout.example.1.jsx').default}>
              <LayoutExample1 />
            </Demo>
          </div>

          <div className='display-card'>
            <Demo
              title='侧边布局'
              code={require('!!raw-loader!./layout.example.4.jsx').default}>
              <LayoutExample4 />
            </Demo>
          </div>

          <div className='display-card'>
            <Demo
              title='顶部 - 侧边布局1'
              code={require('!!raw-loader!./layout.example.2.jsx').default}>
              <LayoutExample2 />
            </Demo>
          </div>

          <div className='display-card'>
            <Demo
              title='顶部 - 侧边布局2'
              code={require('!!raw-loader!./layout.example.3.jsx').default}>
              <LayoutExample3 />
            </Demo>
          </div>

        </div>

        <h2 className='doc-h2'>Props</h2>
        <p className='doc-introduction'>会渲染成div，可接收原生div标签的其余属性</p>
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
