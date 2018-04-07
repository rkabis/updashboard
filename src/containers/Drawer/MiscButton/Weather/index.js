import React, { Component } from 'react'

let requestObj = null

const contentStyle = {
	fontFamily: 'Lato',
	fontSize: 16,
	marginLeft: 3
}

const titleStyle = {
	fontFamily: 'Lato',
	fontSize: 16,
	fontWeight: 'bold'
}

const headerStyle = {
	display: 'flex',
	flexDirection: 'row'
}

const bodyOneStyle = {
	display: 'flex',
	flexDirection: 'row',
	marginTop: 5,
	marginBottom: 5
}

const innerBodyStyle = {
	marginLeft: 120
}

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
			document.getElementById("dashDate").innerHTML = UPdate
			document.getElementById("dashTemp").innerHTML = UPtemp
			document.getElementById("dashHumid").innerHTML = UPhumid
			document.getElementById("dashCloud").innerHTML = UPcloud
			document.getElementById("dashRise").innerHTML = UPsunrise
			document.getElementById("dashSet").innerHTML = UPsunset
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
				<div style={headerStyle}>
					<div style={titleStyle}>
						Today's Weather:
					</div>
					<div style={contentStyle} id="dashDate"/>
				</div>

				<div style={bodyOneStyle}>
					<div>
						<div style={headerStyle}>
							<div style={titleStyle}>
								Temperature:
							</div>
							<div style={contentStyle} id="dashTemp"/>
						</div>
						<div style={headerStyle}>
							<div style={titleStyle}>
								Humidity:
							</div>
							<div style={contentStyle} id="dashHumid"/>
						</div>
						<div style={headerStyle}>
							<div style={titleStyle}>
								Cloudiness:
							</div>
							<div style={contentStyle} id="dashCloud"/>
						</div>
					</div>

					<div style={innerBodyStyle}>
						<div style={headerStyle}>
							<div style={titleStyle}>
								Sunrise:
							</div>
							<div style={contentStyle} id="dashRise"/>
						</div>
						<div style={headerStyle}>
							<div style={titleStyle}>
								Sunset:
							</div>
							<div style={contentStyle} id="dashSet"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}