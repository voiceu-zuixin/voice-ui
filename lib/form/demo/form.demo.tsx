import React from 'react';
import Demo from '../../helper/demo';
import FormExample from "./form.example"


export default function FormDemo() {
  return (
    <div className='doc'>
      <div className='doc-content'>
        <h1 className='doc-title'>
          <span>表单 Form</span>
        </h1>
        <p className='doc-introduction'>一个表单组件 用于输入、验证、提交信息</p>
        <h2 className='doc-h2'>演示</h2>
        <div className='display'>
          <div className='display-card'>
            <Demo
              code={require('!!raw-loader!./form.example.jsx').default}>
              <FormExample />
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
                <td>onChange</td>
                <td>value改变触发事件</td>
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
                <td>onSubmit</td>
                <td>提交触发事件</td>
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
                <td>value</td>
                <td>表单数据</td>
                <td>
                  <code >object</code>
                </td>
                <td>
                  ——
                </td>
                <td>
                  <code >object</code>
                </td>
              </tr>
              <tr>
                <td>fields</td>
                <td>表单栏类型</td>
                <td>
                  <code >object</code>
                </td>
                <td>
                  ——
                </td>
                <td>
                  <code >object</code>
                </td>
              </tr>
              <tr>
                <td>error</td>
                <td>验证提示</td>
                <td>
                  <code >object</code>
                </td>
                <td>
                  ——
                </td>
                <td>
                  <code >object</code>
                </td>
              </tr>
              <tr>
                <td>buttons</td>
                <td>自定义按钮样式</td>
                <td>
                  <code >DOMElement</code>
                </td>
                <td>——</td>
                <td>
                  <code >undefined</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <h2 className='doc-h2'>rules</h2>
        <p className='doc-introduction'>rules用于验证表单，配合ValidateFields函数更新error</p>
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
                <td>表单的label</td>
                <td>
                  <code >string</code>
                </td>
                <td>
                  <code >undefined</code>
                </td>
                <td>
                  <code >undefined</code>
                </td>
              </tr>
              <tr>
                <td>isRequired</td>
                <td>是否必填</td>
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
                <td>minLen</td>
                <td>最小值</td>
                <td>
                  <code >number</code>
                </td>
                <td>
                  ——
                </td>
                <td>
                  ——
                </td>
              </tr>
              <tr>
                <td>maxLen</td>
                <td>最大值</td>
                <td>
                  <code >number</code>
                </td>
                <td>
                  ——
                </td>
                <td>
                  ——
                </td>
              </tr>
              <tr>
                <td>pattern</td>
                <td>正则</td>
                <td>
                  <code >/***/</code>
                </td>
                <td>
                  ——
                </td>
                <td>
                  <code >object</code>
                </td>
              </tr>
              <tr>
                <td>message</td>
                <td>错误提示</td>
                <td>
                  <code >string</code>
                </td>
                <td>
                  ——
                </td>
                <td>
                  ——
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className='doc-h2'>fields</h2>
        <p className='doc-introduction'>fields设置表单栏的label等</p>
        <div className="doc-props">

          <table className='doc-props-table'>
            <thead>
              <tr>
                <th>参数</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name</td>
                <td>
                  <code >string</code>
                </td>
                <td>
                  <code >通过state自定义</code>
                </td>
              </tr>
              <tr>
                <td>label</td>
                <td>
                  <code >string</code>
                </td>
                <td>
                  <code >通过state自定义</code>
                </td>
              </tr>
              <tr>
                <td>input</td>
                <td>
                  <code >object</code>
                </td>
                <td>
                  <code >通过state自定义</code>
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
