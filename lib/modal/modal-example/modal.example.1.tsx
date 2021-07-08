import React, { useState } from 'react'
import { Modal, Button } from '../../index'

export default function () {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <Button onClick={() => { setVisible(!visible) }}>click</Button>
            <Modal visible={visible} buttons={
                [
                    <Button onClick={() => setVisible(false)}>ok</Button>,
                    <Button onClick={() => setVisible(false)}>cancel</Button>
                ]
            }
                onClose={() => { setVisible(false) }}
            >
                <div>我是content</div>
            </Modal>
        </div>

    )
}