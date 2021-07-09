import React from 'react';
export default function Introduction() {
  return (
    <div className='doc'>
      <div className='doc-content'>
        <h1 className='doc-title'>
          <span>Voice UI</span>
        </h1>
        <h2 className='doc-h2'>写在前面</h2>
        <p className='doc-introduction' style={{ marginBottom: '18px' }}>
          Voice UI 是一个 React 的组件库，使用 TypeScript 开发，提供完整的类型定义文件
        </p>
        <p className='doc-introduction' style={{ marginTop: '8px' }}>
          是本人用于提高自己对 React 组件化、工程化开发的理解以及学习 TypeScript 而制作的作品
        </p>

        <h2 className='doc-h2'>注意</h2>
        <div className="doc-notice">
          <p className='doc-introduction'>
            使用 Voice UI 之前，您应该对 React 开发有一定的基础
          </p>
        </div>


        <h2 className='doc-h2'>安装</h2>
        <p className='doc-introduction'>
          推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处
        </p>

        <pre className='doc-introduction-code'>
          <code>$ <span className="token-function">npm</span> <span className="token-function">install</span> voice-ui --save</code>
        </pre>
        <pre className='doc-introduction-code'>
          <code>$ yarn <span className="token-function">add</span> voice-ui</code>

        </pre>
        <p className='doc-introduction'>


        </p>



        <h2 className='doc-h2'>项目心得</h2>

        <ul className='doc-introduction-ul'>
          <li>
            项目基本上采用 TypeScript 开发，TS开发真好用，没有文档的时候直接 ctrl+左键就知道类型了
          </li>
          <li>
            不使用脚手架搭建项目，搭建过程中遇到很多问题，挨个解决后收获巨大，并做了记录，对 webpack 的配置认识提升
          </li>
          <li>
            React 函数式编程与类式编程并用，提高了对 hooks 的认识
          </li>
          <li>
            组件的样式、色彩的搭配参考了一些成熟的 UI 框架（如 antd , Naive UI）
          </li>
        </ul>


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
