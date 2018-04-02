import React, { Component } from 'react'

const deleteStyle = {
	backgroundColor: 'white',
	height: '25px',
	width: '25px'
}

const componentStyle = {
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'row',
}

let arrayOfRemovable = []

export default class extends Component {
	render() {
		function removable() {
			arrayOfRemovable = arrayOfFeatures.splice(4)
		}
		const {
			icon,
			onChangeMapData,
			mapdata,
			arrayOfFeatures
		} = this.props

		{arrayOfFeatures ? removable() : null }
		{console.log(arrayOfRemovable)}

		return (
			<div style={componentStyle}>
				<img
						onClick={onChangeMapData ? (mapdata !== icon ? () => onChangeMapData(icon) : () => onChangeMapData(null)) : null}
						src={require('../icons/' + icon + '.png')}
						alt={icon}
						width={'35vw'}
						height={'40vh'}
						style={{
							filter: 'brightness(30)',
						}}
				/>
				<div style={deleteStyle}>
					{'x'}
				</div>
			</div>
		)
	}
}