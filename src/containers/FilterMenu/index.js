import React, { Component } from 'react'

import FilterSwitch from './ToggleFilters/'

const modalStyle = {
	position: 'absolute',
	zIndex: 200,
}

const featuresWithToggles = ['jeep', 'building', 'org', 'toilet', 'utility', 'rental', 'admin', 'library']

export default class extends Component {
	render() {
		if (!this.props.show) {
			return null
		}

		if (!featuresWithToggles.includes(this.props.show)) {
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