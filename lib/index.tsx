import React from 'react'
import ReactDOM from 'react-dom'
// import Button from './tsx函数式的使用例子'

import Icon from './icon'

const fn = ()=>{
    console.log('fn');
    
}
ReactDOM.render(
    <div>
        <Icon name='wechat' onClick={fn}/>
    </div>
    , document.querySelector('#root'))

