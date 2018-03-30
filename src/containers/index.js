import React, { Component } from 'react'

import Drawer from './Drawer'
import Header from './Header'
import LeafletMap from './LeafletMap'

export default class extends Component {
	constructor () {
		super()
		this.state = {
			mapdata: null
		}
	}

	render() {
		const {
			mapdata
		} = this.state

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					height: '100vh',
					widght: '100vw',
					backgroundColor: 'white'
				}}
			>
				<Drawer
					onChangeMapData={(e) => this.setState({ mapdata: e })}
				/>
				<Header />
				<LeafletMap
					mapdata={mapdata}
				/>
			</div>
		)
	}
}