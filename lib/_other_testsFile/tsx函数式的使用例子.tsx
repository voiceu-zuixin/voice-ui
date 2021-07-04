// 此处为什么要引入React，因为组件内部的div等标签，是React的语法糖
// 内部会调用React.createElement,不引入就会报错
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// 定义Props的内部参数的类型，有点像static PropsType = {  }
// 有? 表示可传可不传。我们可以自己设一个默认值通过 Xxx.defaultProps
interface Props {
    message?: string
}

// Button: React.FunctionComponent 表示Button是一个该类型的组件
// <Props>表示React.FunctionComponent组件需要一个Props类型的参数，需要定义接口
const Button: React.FunctionComponent<Props> = (props) => {

    // 此处定义state，在函数式组件里面，用hooks
    // 用法： const [state, setState] = useState(initialState);
    const [n, setN] = useState(1)

    const change = () => {
        setN(n + 1)
    }

    // 如何使用didMounted生命周期的效果,比如进行ajax的请求
    useEffect(() => {
        console.log('只会在mounted后执行一次，update不执行');

        // 组件注销之前会调用useEffect回调里的return的回调
        // return ()=>{xxx}
    }, [])

    // 因为ts不知道message传没有，所以当进行message操作时，下面两种写法都可以
    props.message!.split('')
    props.message?.split('')

    return (
        <div>
            <h1>{props.message}</h1>
            <h2>{n}</h2>
            <button onClick={change}>bian n</button>
        </div>
    )
}


Button.defaultProps = {
    message: 'default message'
}

// 下面是js的参数类型检查
Button.propTypes = {
    // 当下面会与ts产生冲突的时候，就只能把ts改成any
    // message:PropTypes.number

    message: PropTypes.string
}

export default Button