import React, { Component } from 'react'

import Drawer from './Drawer'
import Header from './AppBar'
import BackgroundMap from './BackgroundMap'

const componentStyle = {
	display: 'flex',
	flexDirection: 'row',
	height: '100vh',
	widght: '100vw',
	backgroundColor: 'white'	
}

export default class extends Component {
	constructor () {
		super()
		this.state = {
			mapdata: null
		}
		this.onChangeMapData = (e) => this.setState({mapdata: e})
	}

	render() {
		const {
			mapdata
		} = this.state

		return (
			<div style={componentStyle}>
				<Drawer
					onChangeMapData={this.onChangeMapData}
					mapdata={mapdata}
				/>
				<Header />
				<BackgroundMap
					mapdata={mapdata}
				/>
			</div>
		)
	}
}