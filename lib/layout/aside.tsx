import React from 'react'
import { scopedClassMaker } from '../helper/scopedClassMaker'

const sc = scopedClassMaker('voice-ui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> { }

const Aside: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props

    return (
        <div
            className={sc('aside', { extra: className })}
            {...rest}
        >
            {props.children}
        </div>
    )
}
export default Aside