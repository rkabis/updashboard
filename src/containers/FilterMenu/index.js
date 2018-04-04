import React, { Component } from 'react'

import FilterSwitch from './ToggleFilters/'

const modalStyle = {
	position: 'absolute',
	height: '300px',
	width: '300px',
	backgroundColor: 'blue',
	zIndex: 200,
	marginLeft: '200px'
}


export default class extends Component {
	render() {
		if (!this.props.show) {
			return null
		}

		const {
			show,
			onChangeMapFilter
		} = this.props
		
		return (
			<div style={modalStyle}>
				<FilterSwitch
					show={show}
					onChangeMapFilter={onChangeMapFilter}
				/>
			</div>
		)
	}
}