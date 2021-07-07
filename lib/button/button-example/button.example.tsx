import React from 'react'
import Button from '../button'
import './button.example.scss'

const ButtonExample1: React.FunctionComponent = () => {
	return (
		<div>
			<Button type="primary">Primary</Button>
			<Button>Default</Button>
			<Button type="dashed">Dashed</Button>
			<Button type="danger">Danger</Button>			
		</div>
	)
}

export default ButtonExample1

