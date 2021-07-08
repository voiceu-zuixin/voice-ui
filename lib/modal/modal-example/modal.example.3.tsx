import React from 'react'
import { Button, alert } from '../../index'

export default function () {
    return (
        <div>
            <Button type="danger" onClick={() => { alert("我是alert") }}>
                click
            </Button>
        </div>
    )
}