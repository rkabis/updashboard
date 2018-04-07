import React, { Component } from 'react'

import Drawer from './Drawer'
import AppBar from './AppBar'
import BackgroundMap from './BackgroundMap'
import FilterMenu from './FilterMenu'

const componentStyle = {
	display: 'flex',
	flexDirection: 'row',
	height: 704,
	width: 1280,
	backgroundColor: 'white'	
}

export default class extends Component {
	constructor () {
		super()
		this.state = {
			mapdata: null,
			filterValue: [],
			filterOpen: false
		}
		this.onChangeMapData = (e) => this.setState({mapdata: e})
		this.onChangeMapFilter = this.addArrayFilter.bind(this)
		this.filterModal = (e) => this.setState({filterOpen: e})
		this.resetFilter = this.resetFilter.bind(this)
	}

	addArrayFilter(num, e) {
		if (num === 1) {
			let arrayTemp = this.state.filterValue
			arrayTemp.push(e)
			this.setState({filterValue: arrayTemp})
		}
		if (num === 0) {
			let arrayTemp = this.state.filterValue
			let indexDelete = arrayTemp.indexOf(e)
			arrayTemp.splice(indexDelete,1)
			this.setState({filterValue: arrayTemp})
		}
	}

	resetFilter() {
		this.state.filterValue = []
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
					resetFilter={this.resetFilter}
				/>
				<AppBar />
				<BackgroundMap
					mapdata={mapdata}
					filterValue={filterValue}
				/>
				<FilterMenu
					show={this.state.filterOpen}
					onChangeMapFilter={this.onChangeMapFilter}
					resetFilter={this.resetFilter}
				/>
			</div>
		)
	}
}