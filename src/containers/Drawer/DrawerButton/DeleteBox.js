import React, { Component } from 'react'

const deleteStyle = {
	backgroundColor: 'white',
	height: '25px',
	width: '25px'
}

const arrayCategoryOne = ['utility', 'gym', 'admin', 'library', 'museum']

export default class extends Component {
	render() {
		if (!this.props.show) {
			return null
		}

		return (
			<div
				style={deleteStyle}
				onClick={() => console.log('test')}
			>
				{'x'}
			</div>
		)
	}
}