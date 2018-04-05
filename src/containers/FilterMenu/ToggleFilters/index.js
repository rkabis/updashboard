import React, { Component } from 'react'

import JeepToggle from './JeepToggle.js'
import BuildingToggle from './BuildingToggle.js'
import OrgToggle  from './OrgToggle.js'
import RentalToggle from './RentalToggle.js'
import UtilityToggle from './UtilityToggle.js'
import AdminToggle from './AdminToggle.js'
import ToiletToggle from './ToiletToggle.js'
import LibraryToggle from './LibraryToggle.js'

export default class extends Component {
	render() {
		const {
			show,
			onChangeMapFilter
		} = this.props

		let toggle = ''
		switch(show) {
			case 'jeep':
				toggle = <JeepToggle onChangeMapFilter={onChangeMapFilter} />
				break
			case 'building':
				toggle = <BuildingToggle onChangeMapFilter={onChangeMapFilter} />
				break
			case 'org':
				toggle = <OrgToggle onChangeMapFilter={onChangeMapFilter} />
				break
			case 'rental':
				toggle = <RentalToggle onChangeMapFilter={onChangeMapFilter} />
				break
			case 'utility':
				toggle = <UtilityToggle onChangeMapFilter={onChangeMapFilter} />
				break
			case 'admin':
				toggle = <AdminToggle onChangeMapFilter={onChangeMapFilter} />
				break
			case 'toilet':
				toggle = <ToiletToggle onChangeMapFilter={onChangeMapFilter} />
				break
			case 'library':
				toggle = <LibraryToggle onChangeMapFilter={onChangeMapFilter} />
				break
			default:
				toggle = <div/>
				break
		}

		return (
			toggle
		)
	}
}