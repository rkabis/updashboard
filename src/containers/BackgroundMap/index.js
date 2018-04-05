import React, { Component } from 'react'
import Control from 'react-leaflet-control'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'

import switchPopupContent from './switchPopupContent'
import switchFilter from './switchFilter/'
import switchStyle from './switchStyle/'
import ZoomButton from './ZoomButton'

const mapboxTiles = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicmthYmlzIiwiYSI6ImNqNnZ5b2p5ZjE3OXkycW1uY2pobDJnaWgifQ.yCMd_pWrokn1fJ6xDFGvzg'
const mapboxAttr =  'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
const mapboxId = 'mapbox.streets'
const mapboxAccess = 'your.mapbox.access.token'

const componentStyle = {
	position: 'absolute',
	height: '704px',
	width: '1280px',
	zIndex: 5
}

export default class extends Component {
	onEachFeature(feature, layer) {
		const {
			mapdata
		} = this.props
		
		const popupContent = switchPopupContent(feature, mapdata)
		layer.bindPopup(popupContent)
		layer.on('mouseover', function (e) {
            this.openPopup();
        })
	}

	constructor() {
		super()
		this.state = {
			mapCenter: [14.654912, 121.064264],
			zoomLevel: 16,
		}
		this.zoomIn = () => this.setState({zoomLevel: this.state.zoomLevel+1})
		this.zoomOut = () => this.setState({zoomLevel: this.state.zoomLevel-1})
	}



	render() {
		const {
			mapdata,
			filterValue
		} = this.props

		const callFilter = (feature) => {
			let xFilter = switchFilter(feature, mapdata, filterValue)
			return xFilter
		}

		const callStyle = (feature) => {
			let xStyle = switchStyle(feature, mapdata)
			return xStyle
		}

		return (
			<div style={componentStyle}>
				<Map
					center={this.state.mapCenter}
					zoom={this.state.zoomLevel}
					zoomControl={false}
				>
					<TileLayer
						attribution={mapboxAttr}
						url={mapboxTiles}
						id={mapboxId}
						accessToken={mapboxAccess}
					/>
					<Control position='bottomright'>
						<ZoomButton
							zoomLevel={this.state.zoomLevel}
							zoomIn={this.zoomIn}
							zoomOut={this.zoomOut}
						/>
					</Control>
					<GeoJSON
						key={`${mapdata} ${filterValue}`}
						data={mapdata ? require('./geojson/UP' + mapdata + '.json') : null}
						onEachFeature={this.onEachFeature.bind(this)}
						style={(feature) => callStyle(feature)}
						filter={(feature) => callFilter(feature)}
					/>
				</Map>
			</div>
		)
	}
}