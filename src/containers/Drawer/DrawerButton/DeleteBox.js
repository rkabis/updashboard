import React, { Component } from 'react'

const deleteSize = '24px'
const arrayCategoryOne = ['utility', 'gym', 'admin', 'library', 'museum']
const deleteStyle = {
	zIndex: 500,
	position: 'fixed',
	marginLeft: '15px'
}


export default class extends Component {
	render() {
		const {
			arrayForCategoryOne,
			arrayForCategoryTwo,
			icon
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
				height={deleteSize}
				width={deleteSize}
				onClick={() => addToCategory(icon)}
				style={deleteStyle}
				alt={'delete'}
			/>
		)
	}
}