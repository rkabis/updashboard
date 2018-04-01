import React, { Component } from 'react'

let requestObj = null

export default class extends Component {
	render() {
	const {
		result
	} = this.props
	
		function convertKelvinToCelsius(kelvin) {
			if (kelvin < (0)) {
				return 'below absolute zero (0 K)'
			} else {
				return (kelvin-273.15)
			}
		}

		function processWeather() {
			let result = JSON.parse(requestObj.responseText)
			let UPtemp = result.main.temp
			UPtemp = convertKelvinToCelsius(UPtemp)
			UPtemp = UPtemp.toFixed(2) + '&#8451'
			let UPhumid = result.main.humidity + "%"
			let UPcloud = result.weather[0].description
			UPcloud = UPcloud.charAt(0).toUpperCase() + UPcloud.slice(1)
			let UPsunrise = result.sys.sunrise
			UPsunrise = new Date(UPsunrise*1000).toString()
			let UPdate = UPsunrise.substring(4, 15)
			UPsunrise = UPsunrise.substring(16, 21)
			let UPsunset = result.sys.sunset
			UPsunset = new Date(UPsunset*1000).toString()
			UPsunset = UPsunset.substring(16, 21)
		}

		function fetchWeather() {
			const requestLocation = 'http://api.openweathermap.org/data/2.5/weather?id=1714865&APPID=afe6aa6230e929d059fbf4107b9c2e77'
			requestObj = new XMLHttpRequest()
			requestObj.addEventListener('load',processWeather,null)
			requestObj.open('GET', requestLocation, true)
			requestObj.send(null)
		}
		fetchWeather()
		return (
			<div>
				<button onClick={() => console.log(result)}>
					asdf
				</button>
			</div>
		)
	}
}