import React, { Component } from 'react'
import Control from 'react-leaflet-control'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import switchFunctionTest from './switchFunctionTest'
import Zoom from './Zoom'

const mapboxTiles = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicmthYmlzIiwiYSI6ImNqNnZ5b2p5ZjE3OXkycW1uY2pobDJnaWgifQ.yCMd_pWrokn1fJ6xDFGvzg'
const mapboxAttr =  'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
const mapboxId = 'mapbox.streets'
const mapboxAccess = 'your.mapbox.access.token'

const mapCenter = [14.654912, 121.064264]
const zoomLevel = 16

export default class extends Component {
	onEachFeature(feature, layer) {
		const {
			mapdata
		} = this.props
		
		var popupContent = switchFunctionTest(feature, mapdata)
		layer.bindPopup(popupContent)
		layer.on('mouseover', function (e) {
            this.openPopup();
        })
	}

	render() {
		const {
			mapdata
		} = this.props

		return (
			<div
				style={{
					position: 'absolute',
					marginTop: '6vh',
					marginLeft: '0.5vw',
					zIndex: 5
				}}
			>
				<Map
					center={mapCenter}
					zoom={zoomLevel}
					zoomControl={false}
				>
					<TileLayer
						attribution={mapboxAttr}
						url={mapboxTiles}
						id={mapboxId}
						accessToken={mapboxAccess}
					/>
					<Control position='bottomright'>
						<Zoom/>
					</Control>
					<GeoJSON
						key={mapdata}
						data={mapdata ? require('./geojson/UP' + mapdata + '.json') : null}
						onEachFeature={this.onEachFeature.bind(this)}
					/>
				</Map>
			</div>
		)
	}
}