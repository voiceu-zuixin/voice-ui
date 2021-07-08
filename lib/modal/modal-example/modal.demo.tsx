import React from 'react';
import Demo from '../../helper/demo';
import ModalExample1 from "./modal.example.1"
import ModalExample2 from "./modal.example.2"
import ModalExample3 from "./modal.example.3"
import ModalExample4 from "./modal.example.4"

export default function ModalDemo() {
  return (
    <div className='doc'>
      <div className='doc-content'>
        <h1 className='doc-title'>
          <span>模态框 Modal</span>
        </h1>
        <p className='doc-introduction'>Modal会弹出来，里面有一些好康的</p>
        <h2 className='doc-h2'>演示</h2>
        <div className='display'>
          <div className='display-card'>
            <Demo
              title='基础用法'
              code={require('!!raw-loader!./modal.example.1.jsx').default}>
              <ModalExample1 />
            </Demo>
          </div>
          <div className='display-card'>
            <Demo
              title='外部遮罩不可点'
              code={require('!!raw-loader!./modal.example.2.jsx').default}>
              <ModalExample2 />
            </Demo>
          </div>
          <div className='display-card'>
            <Demo
              title='函数用法 alert'
              code={require('!!raw-loader!./modal.example.3.jsx').default}>
              <ModalExample3 />
            </Demo>
          </div>
          <div className='display-card'>
            <Demo
              title='函数用法 confirm'
              code={require('!!raw-loader!./modal.example.4.jsx').default}>
              <ModalExample4 />
            </Demo>
          </div>
        </div>

        <h2 className='doc-h2'>Props</h2>
        <p className='doc-introduction'>既可以使用组件Modal，也可以在其他组件内部使用函数 alert 或 confirm</p>
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
                <td>visible</td>
                <td>是否弹出</td>
                <td>
                  <code >boolean</code>
                </td>
                <td>
                  <code >true | false</code>
                </td>
                <td>
                  <code >false</code>
                </td>
              </tr>
              <tr>
                <td>onClose</td>
                <td>关闭的时候触发</td>
                <td>
                  <code >function</code>
                </td>
                <td>
                  <code >undefined</code>
                </td>
                <td>
                  <code >undefined</code>
                </td>
              </tr>
              <tr>
                <td>onCloseMask</td>
                <td>遮罩是否可触发关闭Modal</td>
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
                <td>buttons</td>
                <td>你可以传入自定义Button组件</td>
                <td>
                  <code >Array</code>
                </td>
                <td>
                  ——
                </td>
                <td>
                  <code >Button</code>
                </td>
              </tr>
              <tr>
                <td>alert</td>
                <td>一个函数，用于警告</td>
                <td>
                  <code >function</code>
                </td>
                <td>
                  ——
                </td>
                <td>
                  <code >undefined</code>
                </td>
              </tr>
              <tr>
                <td>confirm</td>
                <td>一个函数，用于确认</td>
                <td>
                  <code >function</code>
                </td>
                <td>
                  ——
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
