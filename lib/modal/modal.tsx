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

const scopedClass = scopedClassMaker("voice-ui-modal")
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

                <div className={sc('')}>
                    <div className={sc("close")} onClick={onClickClose}>
                        <Icon name="close" />
                    </div>
                    <header className={sc("header")}>
                        提示
                    </header>
                    <main className={sc("main")}>
                        {props.children}
                    </main>
                    {/* {props.buttons&&props.buttons.length>0&&()} */}
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
    const close = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = (
        <Modal
            visible={true}
            buttons={[
                <button onClick={close}>我知道啦</button>
            ]}
            onClose={close}
            onCloseMask={false}
        >{content}
        </Modal>)
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
}

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
        yes && yes()
    }
    const onNo = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
        no && no()
    }
    const component = (
        <Modal
            visible={true}
            onClose={onNo}
            onCloseMask={false}
            buttons={[
                <button onClick={onYes}>yes</button>,
                <button onClick={onNo}>no</button>
            ]}
        >
            {content}
        </Modal>
    )
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
}

export { alert, confirm }
export default Modal