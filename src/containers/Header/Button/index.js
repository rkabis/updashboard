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
			title
		} = this.props

		return (
			<div
				style={{
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					fontFamily: 'Muli'
				}}
			>
				{title}
				<div
					style={{
						width: '90px',
						height: '2px',
						backgroundColor: 'white',
					}}
				>
				</div>
			</div>
		)
	}
}