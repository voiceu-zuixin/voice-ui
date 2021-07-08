import React from 'react';
import Demo from '../../helper/demo';
import InputExample1 from './input.example.1'
import InputExample2 from './input.example.2'
import InputExample3 from './input.example.3'
import InputExample4 from './input.example.4'


export default function InputDemo() {
  return (
    <div className='doc'>
      <div className='doc-content'>
        <h1 className='doc-title'>
          <span>输入框 Input</span>
        </h1>
        <p className='doc-introduction'>正经的输入框一般配合 Button 使用效果更佳</p>
        <h2 className='doc-h2'>演示</h2>
        <div className='display'>
          <div className='display-card'>
            <Demo
              title='基础用法'
              code={require('!!raw-loader!./input.example.1.jsx').default}>
              <InputExample1 />
            </Demo>
          </div>
          <div className='display-card'>
            <Demo
              title='Small'
              code={require('!!raw-loader!./input.example.2.jsx').default}>
              <InputExample2 />
            </Demo>
          </div>
          <div className='display-card'>
            <Demo
              title='默认大小'
              code={require('!!raw-loader!./input.example.3.jsx').default}>
              <InputExample3 />
            </Demo>
          </div>
          <div className='display-card'>
            <Demo
              title='Large'
              code={require('!!raw-loader!./input.example.4.jsx').default}>
              <InputExample4 />
            </Demo>
          </div>
        </div>

        <h2 className='doc-h2'>Props</h2>
        <p className='doc-introduction'>提供一些api，同时支持原生 input 的其他所有属性</p>
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
                <td>placeholder</td>
                <td>文本输入的占位符</td>
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
                <td>value</td>
                <td>input的值</td>
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
                <td>size</td>
                <td>大小</td>
                <td>
                  <code >string</code>
                </td>
                <td>
                  <code >undefined | 'large' | 'small'</code>
                </td>
                <td>
                  <code >default</code>
                </td>
              </tr>
              <tr>
                <td>onchange</td>
                <td>事件</td>
                <td>
                  <code >function</code>
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
