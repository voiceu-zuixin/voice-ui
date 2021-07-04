import React, { Fragment, useState } from 'react'
import Modal, { alert, confirm } from './modal'

export default function () {
    const [x, setX] = useState(false)
    const [y, setY] = useState(false)
    return (
        <Fragment>

            <div>
                <h2>遮罩可点</h2>
                <button onClick={() => { setX(!x) }}>click</button>
                <Modal visible={x} buttons={
                    [
                        <button onClick={() => setX(false)}>ok</button>,
                        <button onClick={() => setX(false)}>cancel</button>
                    ]
                }
                    onClose={() => { setX(false) }}
                >
                    <div>我是子标签</div>
                </Modal>
            </div>
            <div>
                <h2>遮罩不可点</h2>
                <button onClick={() => { setY(!y) }}>click</button>
                <Modal visible={y} buttons={
                    [
                        <button onClick={() => setY(false)}>ok</button>,
                        <button onClick={() => setY(false)}>cancel</button>
                    ]
                }
                    onClose={() => { setY(false) }}
                    onCloseMask={false}
                >
                    <div>我是子标签</div>
                </Modal>
            </div>
            <div>
                <h2>alert</h2>
                <button onClick={() => { alert("我是alert") }}>click</button>
                <button onClick={() => {
                    confirm("我是confirm",
                        () => {console.log("yes");                        },
                        () => {console.log("no") })
                }}>click</button>

            </div>
        </Fragment>

    )
}