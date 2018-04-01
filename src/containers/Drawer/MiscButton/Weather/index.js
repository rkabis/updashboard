import React, { Component } from 'react'

let requestObj = null

export default class extends Component {
	render() {
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
			document.getElementById("dashDate").innerHTML = "<strong>Date:</strong> " + UPdate
			document.getElementById("dashTemp").innerHTML = "<strong>Temperature:</strong> " + UPtemp
			document.getElementById("dashHumid").innerHTML = "<strong>Humidity:</strong> " + UPhumid
			document.getElementById("dashCloud").innerHTML = "<strong>Cloudiness:</strong> " + UPcloud
			document.getElementById("dashRise").innerHTML = "<strong>Sunrise:</strong> " + UPsunrise
			document.getElementById("dashSet").innerHTML = "<strong>Sunset:</strong> " + UPsunset
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
				<div id="dashDate"/>
				<div id="dashTemp"/>
				<div id="dashHumid"/>
				<div id="dashCloud"/>
				<div id="dashRise"/>
				<div id="dashSet"/>
			</div>
		)
	}
}