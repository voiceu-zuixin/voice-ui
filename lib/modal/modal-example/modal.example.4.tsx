import React from 'react'
import { Button, confirm } from '../../index'

export default function () {
    return (
        <div>
            <Button onClick={() => {
                confirm("我是confirm",
                    () => { console.log("yes"); },
                    () => { console.log("no") })
            }}>click</Button>
        </div>
    )
}