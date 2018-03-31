import React, { Component } from 'react'

export default class extends Component {
	render() {
		const {
			title,
			icon,
			onChangeMapData
		} = this.props

		return (
			<div
				style={{
					cursor: 'pointer'
				}}
				onClick={onChangeMapData ? () => onChangeMapData(icon) : null}
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