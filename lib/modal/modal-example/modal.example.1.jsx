import React, { useState } from 'react'
import { Modal, Button } from 'voice-ui'

export default function () {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <h2>遮罩可点</h2>
            <Button onClick={() => { setVisible(!visible) }}>
                click
            </Button>
            <Modal
                visible={visible}
                onClose={() => { setVisible(false) }}
                buttons={
                    [
                        <Button onClick={() => setVisible(false)}>ok</Button>,
                        <Button onClick={() => setVisible(false)}>cancel</Button>
                    ]
                }
            >
                <div>我是content</div>
            </Modal>
        </div>
    )
}