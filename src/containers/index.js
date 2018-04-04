import React, { Component } from 'react'

import Drawer from './Drawer'
import Header from './AppBar'
import BackgroundMap from './BackgroundMap'

const componentStyle = {
	display: 'flex',
	flexDirection: 'row',
	height: '704px',
	width: '1280px',
	backgroundColor: 'white'	
}

export default class extends Component {
	constructor () {
		super()
		this.state = {
			mapdata: null,
			filterValue: ''
		}
		this.onChangeMapData = (e) => this.setState({mapdata: e})
		this.onChangeMapFilter = (e) => this.setState({filterValue: e})
	}

	render() {
		const {
			mapdata,
			filterValue
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
					filterValue={filterValue}
				/>
			</div>
		)
	}
}