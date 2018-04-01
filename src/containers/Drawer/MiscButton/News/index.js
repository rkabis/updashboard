import React, { Component } from 'react'

let requestObj = null
let newsNum = 0
let newsMax

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
				<button onClick={() => changeNews('plus')}> Older </button>
				<div id='newsInfo' />
				<button onClick={() => changeNews('minus')}> Newer </button>
			</div>
		)
	}
}