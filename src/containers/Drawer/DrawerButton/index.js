import React, { Component } from 'react'

export default class extends Component {
	render() {
		const {
			title,
			icon,
			onChangeMapData,
			mapdata
		} = this.props

		return (
			<div
				style={{
					cursor: 'pointer'
				}}
				// onClick={onChangeMapData ? () => onChangeMapData(icon) : () => onChangeMapData(null)}
				onClick={mapdata!==icon ? () => onChangeMapData(icon) : () => onChangeMapData(null)}
			>
				<img
					src={require('./icons/' + icon + '.png')}
					alt={icon}
					width={'35vw'}
					height={'40vh'}
				/>
				{title}
			</div>
		)
	}
}