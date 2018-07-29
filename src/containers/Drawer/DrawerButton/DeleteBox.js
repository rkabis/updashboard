import React, { Component } from 'react'

const deleteSize = 24
const arrayCategoryOne = ['utility', 'gym', 'admin', 'library', 'museum']
const deleteStyle = {
	zIndex: 5,
	position: 'fixed',
	marginLeft: 15
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
			arrayCategoryOne.includes(icon) ? arrayForCategoryOne.push(icon) : arrayForCategoryTwo.push(icon)
		}

		if (!this.props.show) {
			return null
		}

		return (
			<img
				src={require('./icons/delete.png')}
				height={deleteSize}
				width={deleteSize}
				onClick={() => {addToCategory(icon), onChangeMapData(null), filterModal(false)}}
				style={deleteStyle}
				alt={'delete'}
			/>
		)
	}
}