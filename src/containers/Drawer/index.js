import React, { Component} from 'react'

import Button from './Button'

export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			mapdata: null
		}
	}

	renderMap(i) {
		
	}

	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '100vh',
					width: '5vw',
					backgroundColor: '#1C232C',
					padding: '10px'
				}}
			>
				<Button
					icon={'menu'}
				/>
				<Button
					icon={'building'}
				/>
				<Button
					icon={'bike'}
					onClick={() => this.renderMap('bike')}
				/>
				<Button
					icon={'jeep'}
				/>
				<Button
					icon={'rental'}
				/>
				<Button
					icon={'toilet'}
				/>
				<Button
					icon={'plus'}
				/>
				<Button
					icon={'plus'}
				/>
				<Button
					icon={'news'}
				/>
			</div>
		)
	}
}