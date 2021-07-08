import React from 'react';
export default function Introduction() {
  return (
    <div className='doc'>
      <div className='doc-content'>
        <h1 className='doc-title'>
          <span>Voice UI</span>
        </h1>
        <h2 className='doc-h2'>写在前面</h2>
        <p className='doc-introduction'>
          Voice UI 是一个 React 的组件库，用于提高自己对 React 组件化、工程化开发的理解和学习 TypeScript 而制作的作品</p>
        <h2 className='doc-h2'>项目心得</h2>

        <ul className='doc-introduction-ul'>
          <li>
            项目基本上采用 TypeScript 开发，TS开发真的好，没有文档的时候直接 ctrl+左键
          </li>
          <li>
            不使用脚手架搭建项目，搭建过程中遇到很多问题，挨个解决后收获巨大，并做了记录，对 webpack 认识提升
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
