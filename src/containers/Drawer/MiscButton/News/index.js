import React, { Component } from 'react'

let requestObj = null
let newsNum = 0
let newsMax

const arrowSize = '28px'
const arrowStyle = {
	cursor: 'pointer'
}

const changeNewsStyle = {
	position: 'fixed',
	marginLeft: '450px',
	marginTop: '160px'
}

const titleStyle = {
	fontFamily: 'Lato',
	fontSize: '18pt',
	fontWeight: 'bold',
	marginTop: '5px',
	marginBottom: '5px'
}

export default class extends Component {
	render() {
		fetchNews()
		function fetchNews() {
			const requestLocation = 'http://upmobile.webstarterz.com/upmobile.xyz/wp-json/wp/v2/posts'
			requestObj = new XMLHttpRequest()
			requestObj.addEventListener('load', processNews, null)
			requestObj.open('GET', requestLocation, true)
			requestObj.send(null)
		}

		function processNews() {
			let news = JSON.parse(requestObj.responseText)
			newsMax = news.length-1
			let tempDate = news[newsNum].date
			let newsDate = tempDate.substring(0, 10)
			let newsTitle = news[newsNum].title.rendered
			let newsContent = news[newsNum].content.rendered
			let newsID = news[newsNum].id
			if (newsID === 591 || newsID === 608) {
				newsNum = newsNum + 1
				processNews()
			} else {
				document.getElementById('newsInfo').innerHTML = newsTitle + '<br/>' + newsDate + '<br/><br/>' + newsContent;
			}
			if (newsID === 399) {
				document.getElementsByTagName('span')[1].style.fontSize = '9pt'
			}
		}

		function changeNews(orderChange) {
			if (newsNum < newsMax-1 && orderChange === "plus") {
				newsNum = newsNum + 1
			} else if (newsNum > 0 && orderChange === "minus") {
				newsNum = newsNum - 1
			}
			processNews()
		}

		return (
			<div>
				<div style={titleStyle}>
					News
				</div>
				<div id='newsInfo' />
				<div style={changeNewsStyle}>
					<img
						onClick={() => changeNews('minus')}
						src={require('../icons/left.png')}
						height={arrowSize}
						width={arrowSize}
						style={arrowStyle}
						alt={'minus'}
					/>
					<img
						onClick={() => changeNews('plus')}
						src={require('../icons/right.png')}
						height={arrowSize}
						width={arrowSize}
						style={arrowStyle}
						alt={'plus'}
					/>
				</div>
			</div>
		)
	}
}