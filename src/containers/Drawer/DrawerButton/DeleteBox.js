import React, { Component } from 'react'

const deleteStyle = {
	backgroundColor: '#A31F25',
	height: '12px',
	width: '12px',
	overflow: 'hidden',
	fontFamily: 'Lato',
	fontSize: '8pt',
	borderRadius: '5pt',
	textAlign: 'center',
	paddingBottom: '2px',
	paddingRight: '1px'
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
				x
			</div>
		)
	}
}