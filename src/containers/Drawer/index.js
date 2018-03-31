import React, { Component} from 'react'

import DrawerButton from './DrawerButton'

export default class extends Component {
	render() {
		const {
			onChangeMapData,
			mapdata
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
					mapdata={mapdata}
				/>
				<DrawerButton
					icon={'bike'}
					onChangeMapData={onChangeMapData}
					mapdata={mapdata}
				/>
				<DrawerButton
					icon={'jeep'}
					onChangeMapData={onChangeMapData}
					mapdata={mapdata}
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
					mapdata={mapdata}
				/>
				<DrawerButton
					icon={'toilet'}
					onChangeMapData={onChangeMapData}
					mapdata={mapdata}
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