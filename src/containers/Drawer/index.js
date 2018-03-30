import React, { Component} from 'react'

import Button from './Button'

export default class extends Component {
	render() {
		const {
			onChangeMapData
		} = this.props

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
					onChangeMapData={onChangeMapData}
				/>
				<Button
					icon={'bike'}
					onChangeMapData={onChangeMapData}
				/>
				<Button
					icon={'jeep'}
					onChangeMapData={onChangeMapData}
				/>
				<Button
					icon={'rental'}
					onChangeMapData={onChangeMapData}
				/>
				<Button
					icon={'toilet'}
					onChangeMapData={onChangeMapData}
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