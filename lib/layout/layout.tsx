import React, { ReactElement } from 'react'
import './layout.scss'
import Aside from '../aside/aside'

import { scopedClassMaker } from '../helper/scopedClassMaker'

const sc = scopedClassMaker('voice-ui-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...rest } = props;
    
    const children = props.children as Array<ReactElement>;
    const hasAside = 'length' in children &&
        children.reduce((result, node) => result || node.type === Aside, false);
    return (
        <div className={sc({ '': true, hasAside }, { extra: className })} {...rest}>
            {props.children}
        </div>
    );
}


export default Layout
export {default as Layout} from './layout'
export {default as Header} from '../header/header'
export {default as Footer} from '../footer/footer'
export {default as Content} from '../content/content'
export {default as Aside} from '../aside/aside'
