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
					width: '4vw',
					backgroundColor: '#1C232C',
					zIndex: 10,
					overflow: 'hidden'
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
				<div
					style={{
						width: '40px',
						height: '2px',
						backgroundColor: '#3A4047',
					}}
				>
				</div>
				<Button
					icon={'rental'}
					onChangeMapData={onChangeMapData}
				/>
				<Button
					icon={'toilet'}
					onChangeMapData={onChangeMapData}
				/>
				<div
					style={{
						width: '40px',
						height: '2px',
						backgroundColor: '#3A4047',
					}}
				>
				</div>
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