import React, { Component } from 'react'

import DeleteBox from './DeleteBox.js'

const componentStyle = {
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'row',
	marginTop: 10,
}

const iconSize = 25

const removableFeatures = ['utility', 'gym', 'admin', 'library', 'museum', 'org', 'parking', 'wifi', 'bucket', 'gates','canteens']

export default class extends Component {
	render() {
		const {
			icon,
			onChangeMapData,
			mapdata,
			arrayForCategoryOne,
			arrayForCategoryTwo,
			filterModal,
			resetFilter
		} = this.props

		let state = false

		const changeState = () => {
			state = true
		}

		removableFeatures.includes(icon) ? changeState() : null

		return (
			<div style={componentStyle}>
				<img
						onClick={onChangeMapData ? (mapdata !== icon ? () => {onChangeMapData(icon), filterModal(icon), resetFilter()} : () => {onChangeMapData(null), filterModal(false), resetFilter()}) : null}
						src={require('../icons/' + icon + '.png')}
						alt={icon}
						width={iconSize}
						height={iconSize}
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
						onChangeMapData={onChangeMapData}
						filterModal={filterModal}
					/>
				</div>
			</div>
		)
	}
}