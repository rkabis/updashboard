import React, { Component } from 'react'

import DeleteBox from './DeleteBox.js'

const devWidth = (window.screen.width/1280)
const devHeight = (window.screen.height/800)

const componentStyle = {
	cursor: 'pointer',
	display: 'flex',
	flexDirection: 'row',
	marginTop: 10*devHeight,
}

const iconSize = 25

const removableFeatures = ['utility', 'gym', 'admin', 'library', 'museum', 'org', 'parking', 'wifi', 'bucket', 'gates']

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

		{removableFeatures.includes(icon) ? changeState() : null}

		return (
			<div style={componentStyle}>
				<img
						onClick={onChangeMapData ? (mapdata !== icon ? () => {onChangeMapData(icon), filterModal(icon), resetFilter()} : () => {onChangeMapData(null), filterModal(false), resetFilter()}) : null}
						src={require('../icons/' + icon + '.png')}
						alt={icon}
						width={iconSize*devWidth}
						height={iconSize*devHeight}
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