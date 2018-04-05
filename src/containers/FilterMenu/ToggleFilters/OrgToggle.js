import React, { Component } from 'react'

const componentStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	height: '150px',
	width:'150px',
	marginLeft: '60px',
	marginTop: '60px'
}

export default class extends Component {
	render() {
		const {
			onChangeMapFilter
		} = this.props

		return (
			<div style={componentStyle}>
				Org
			</div>
		)
	}
}