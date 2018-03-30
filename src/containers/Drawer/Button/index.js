import React, { Component } from 'react'

export default class extends Component {

	constructor(props){
		super(props)
		this.state = {
			clicked: false
		}
	}

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