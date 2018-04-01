import React, { Component} from 'react'

import DrawerButton from './DrawerButton'

const componentStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	width: '4vw',
	backgroundColor: '#1C232C',
	zIndex: 10,
	overflow: 'hidden'
}

const lineStyle = {
	width: '40px',
	height: '2px',
	backgroundColor: '#3A4047'
}

export default class extends Component {
	render() {
		const {
			onChangeMapData,
			mapdata
		} = this.props

		return (
			<div style={componentStyle}>
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
				<div style={lineStyle} />
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
				<div style={lineStyle} />
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