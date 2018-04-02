import React, { Component } from 'react'

const deleteStyle = {
	backgroundColor: 'white',
	height: '25px',
	width: '25px'
}

export default class extends Component {
	render() {
		if (!this.props.show) {
			return null
		}

		return (
			<div
				style={deleteStyle}
			>
				{'x'}
			</div>
		)
	}
}