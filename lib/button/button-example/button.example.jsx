import React, { Component } from 'react'
import { Button } from 'voice-ui'

export default class Demo extends Component {
    render() {
        return (
            <div>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="primary">Primary</Button>
                <Button type="danger">Danger</Button>
            </div>
        )
    }
}
