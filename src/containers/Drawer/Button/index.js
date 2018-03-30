import React, { Component } from 'react'

export default class extends Component {

	constructor(props){
		super(props)
		this.state = {
			clicked: false
		}
	}

	render() {
		const {
			title,
			icon
		} = this.props

		return (
			<div>
				<img
					src={require('./icons/' + icon + '.png')}
					alt={icon}
					width={'40vw'}
					height={'45vh'}
				/>
				{title}
			</div>
		)
	}
}