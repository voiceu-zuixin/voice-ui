import React from 'react'
import Button from '../button'
import './button.example.scss'

const ButtonExample1: React.FunctionComponent = () => {
	return (
		<div>
			<span style={{ marginRight: '10px' }}>
				<Button>Default</Button>
			</span>
			<span style={{ marginRight: '10px' }}>
				<Button type="dashed">Dashed</Button>
			</span>
			<span style={{ marginRight: '10px' }}>
				<Button type="primary">Primary</Button>
			</span>
			<span style={{ marginRight: '10px' }}>
				<Button type="danger">Danger</Button>
			</span>
		</div>
	)
}

export default ButtonExample1

