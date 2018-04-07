import React, { Component } from 'react'

const devWidth = (window.screen.width/1280)
const devHeight = (window.screen.height/800)

const deleteSize = 24
const arrayCategoryOne = ['utility', 'gym', 'admin', 'library', 'museum']

const deleteStyle = {
	zIndex: 500,
	position: 'fixed',
	marginLeft: 15*devWidth
}


export default class extends Component {
	render() {
		const {
			arrayForCategoryOne,
			arrayForCategoryTwo,
			icon,
			onChangeMapData,
			filterModal
		} = this.props

		const addToCategory = (icon) => {
			{arrayCategoryOne.includes(icon) ? arrayForCategoryOne.push(icon) : arrayForCategoryTwo.push(icon)}
		}

		if (!this.props.show) {
			return null
		}

		return (
			<img
				src={require('./icons/delete.png')}
				height={deleteSize*devHeight}
				width={deleteSize*devWidth}
				onClick={() => {addToCategory(icon), onChangeMapData(null), filterModal(false)}}
				style={deleteStyle}
				alt={'delete'}
			/>
		)
	}
}