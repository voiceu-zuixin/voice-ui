import React from 'react'
import ReactDOM from 'react-dom'
// import Button from './tsx函数式的使用例子'

import Icon from './icon/icon'

// 复制写法，因为在Icon里面没有做好声明，而是直接用箭头函数
// const fn = (e: React.MouseEvent<SVGAElement | SVGUseElement>) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(e.currentTarget.href);
//     // target才有href，但是要用断言，这样可以不写参数类型<xxx>
//     console.log((e.target as SVGUseElement).href);

// }
const fn: React.MouseEventHandler = (e) => {
    console.log(e.target);

}
const enter = () => {
    console.log('jinlaile');

}
const leave = () => {
    console.log('leave');

}

ReactDOM.render(
    <div>
        <Icon name='wechat'
            className='q'
            onClick={fn}
            onMouseEnter={enter}
            onMouseLeave={leave}
        />
    </div>
    , document.querySelector('#root'))

