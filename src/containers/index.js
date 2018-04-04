import React, { Component } from 'react'

import Drawer from './Drawer'
import Header from './AppBar'
import BackgroundMap from './BackgroundMap'
import FilterMenu from './FilterMenu'

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
			filterValue: '',
			filterOpen: false
		}
		this.onChangeMapData = (e) => this.setState({mapdata: e})
		this.onChangeMapFilter = (e) => this.setState({filterValue: e})
		this.filterModal = (e) => this.setState({filterOpen: e})
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
					filterModal={this.filterModal}
				/>
				<Header />
				<BackgroundMap
					mapdata={mapdata}
					filterValue={filterValue}
				/>
				<FilterMenu
					show={this.state.filterOpen}
					onChangeMapFilter={this.onChangeMapFilter}
				/>
			</div>
		)
	}
}