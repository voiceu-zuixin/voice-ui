import React from 'react'
import { Button, alert } from 'voice-ui'

export default function () {
    return (
        <div>
            <Button type="danger" onClick={() => { alert("我是alert") }}>
                click
            </Button>
        </div>
    )
}