import React, { Component } from 'react'
import { Button } from 'voice-ui'

export default class Button extends Component {
	render() {
		return (
			<div>
				<Button type="primary">Primary</Button>
				<Button>Default</Button>
				<Button type="dashed">Dashed</Button>
				<Button type="danger">Danger</Button>
				<Button icon="facebook">facebook</Button>
			</div>
		)
	}
}
