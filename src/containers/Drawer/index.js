import React, { Component} from 'react'

import DrawerButton from './DrawerButton'

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
				<DrawerButton
					icon={'menu'}
				/>
				<DrawerButton
					icon={'building'}
					onChangeMapData={onChangeMapData}
				/>
				<DrawerButton
					icon={'bike'}
					onChangeMapData={onChangeMapData}
				/>
				<DrawerButton
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
				<DrawerButton
					icon={'rental'}
					onChangeMapData={onChangeMapData}
				/>
				<DrawerButton
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
				<DrawerButton
					icon={'plus'}
				/>
				<DrawerButton
					icon={'plus'}
				/>
				<DrawerButton
					icon={'news'}
				/>
			</div>
		)
	}
}