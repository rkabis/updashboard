import React, { Component } from 'react'

import DeleteBox from './DeleteBox.js'

const componentStyle = {
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'row',
	marginTop: '10px',
}

const removableFeatures = ['utility', 'gym', 'admin', 'library', 'museum', 'org', 'parking', 'wifi', 'bucket', 'gates']

export default class extends Component {
	render() {
		const {
			icon,
			onChangeMapData,
			mapdata,
			arrayForCategoryOne,
			arrayForCategoryTwo
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
						width={'25px'}
						height={'25px'}
						style={{
							filter: 'brightness(30)',
						}}
				/>
				<div
					onClick={() => this.props.removeFeature(icon)}
				>
					<DeleteBox
						arrayForCategoryOne={arrayForCategoryOne}
						arrayForCategoryTwo={arrayForCategoryTwo}
						icon={icon}
						show={state}
					/>
				</div>
			</div>
		)
	}
}