import React, { Component } from 'react'

import DeleteBox from './DeleteBox.js'

const componentStyle = {
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'row',
}

const removableFeatures = ['utility', 'gym', 'admin', 'library', 'museum', 'org', 'parking', 'wifi', 'bucket', 'gates']
const returnableArrayForCategoryOne = ['utility', 'gym', 'admin', 'library', 'museum']

export default class extends Component {
	render() {
		const {
			icon,
			onChangeMapData,
			mapdata,
			arrayOfFeatures,
			removeFeature
		} = this.props

		let state = false

		const changeState = () => {
			state = true
		}

		{removableFeatures.includes(icon) ? changeState() : null}

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
				<div
					onClick={() => this.props.removeFeature(icon)}
				>
					<DeleteBox
						show={state}
					/>
				</div>
			</div>
		)
	}
}