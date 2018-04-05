import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
			onChangeMapFilter,
			resetFilter
		} = this.props
		
		return (
			<div style={modalStyle}>
				<MuiThemeProvider>
					<FilterSwitch
						show={show}
						onChangeMapFilter={onChangeMapFilter}
						resetFilter={resetFilter}
					/>
				</MuiThemeProvider>
			</div>
		)
	}
}