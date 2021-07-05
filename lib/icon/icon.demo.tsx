import React from 'react'
import Demo from '../helper/demo'
import IconExample from './icon.example'

const code = require('!!raw-loader!./icon.example.tsx')

export default function IconDemo() {
    return (
        <div>
            <Demo code={code.default}>
                <IconExample />
            </Demo>
        </div>
    )
}
