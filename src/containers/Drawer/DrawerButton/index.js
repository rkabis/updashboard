import React, { Component } from 'react'

export default class extends Component {
	render() {
		const {
			icon,
			onChangeMapData,
			mapdata
		} = this.props

		return (
			<div
				style={{
					cursor: 'pointer'
				}}
				onClick={onChangeMapData ? (mapdata !== icon ? () => onChangeMapData(icon) : () => onChangeMapData(null)) : null}
			>
				<img
					src={require('../icons/' + icon + '.png')}
					alt={icon}
					width={'35vw'}
					height={'40vh'}
					style={{
						filter: 'brightness(30)'
					}}
				/>
			</div>
		)
	}
}