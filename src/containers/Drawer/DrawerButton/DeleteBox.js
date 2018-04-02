import React, { Component } from 'react'

const deleteStyle = {
	backgroundColor: 'white',
	height: '25px',
	width: '25px'
}

const arrayCategoryOne = ['utility', 'gym', 'admin', 'library', 'museum']

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
			<div
				style={deleteStyle}
				onClick={() => addToCategory(icon)}
			>
				{'x'}
			</div>
		)
	}
}