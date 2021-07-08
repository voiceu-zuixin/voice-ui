import React from 'react';
export default function Operation() {
    return (
        <div className='doc'>
            <div className='doc-content'>
                <h1 className='doc-title'>
                    <span>按钮 Button</span>
                </h1>
                <p className='doc-introduction'>按钮用于触发一个即时操作， 哪里不会点哪里</p>
                <h2 className='doc-h2'>演示</h2>

                <h2 className='doc-h2'>Props</h2>
                <p className='doc-introduction'>支持原生 button 的其他所有属性</p>
              
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
