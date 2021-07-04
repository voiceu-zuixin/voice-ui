import React, { Fragment, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'
import { Icon } from '../index'
import { scopedClassMaker } from '../helper/scopedClassMaker'

// 不是 对象的写法 ,
interface ModalProps {
    visible: boolean
    buttons?: Array<ReactElement>
    onClose: React.MouseEventHandler
    onCloseMask?: boolean
}

const scopedClass = scopedClassMaker("fun-ui-modal")
const sc = scopedClass

const Modal: React.FunctionComponent<ModalProps> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }

    const onClickMaskClose: React.MouseEventHandler = (e) => {
        if (props.onCloseMask) {
            onClickClose(e)
        }
    }

    const content = (
        props.visible ? (
            <Fragment>
                {/* 遮罩 */}
                <div className={sc('mask')} onClick={onClickMaskClose}></div>

                <div className={sc()}>
                    <div className={sc("close")} onClick={onClickClose}>
                        <Icon name="close" />
                    </div>
                    <header className={sc("header")}>
                        提示
                    </header>
                    <main className={sc("main")}>
                        {props.children}
                    </main>
                    <footer className={sc("footer")}>
                        {props.buttons && props.buttons.map((btn, index) =>
                            React.cloneElement(btn, { key: index })
                        )}
                    </footer>
                </div>
            </Fragment>
        ) : null
    )
    return (
        ReactDOM.createPortal(content, document.body)
    )
}

Modal.defaultProps = {
    onCloseMask: true
}

// 导出一个简易版API
const alert = (content: string) => {
    const component = <Modal
        visible={true}
        onClose={() => {
            ReactDOM.render(React.cloneElement(component, { visible: false }), div)
            ReactDOM.unmountComponentAtNode(div)
            div.remove()
        }}
    >{content}</Modal>
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
}

export { alert }
export default Modal