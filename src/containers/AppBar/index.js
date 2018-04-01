import React, { Component } from 'react'

import ContactButton from './ContactButton'
import AboutButton from './AboutButton'

const componentStyle = {
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: '#A31F25',
	width: '97vw',
	height: '6vh',
	zIndex: 10,
	overflow: 'hidden'
}

const titleStyle = {
	color: 'white',
	fontFamily: 'Maven Pro'
}

const buttonStyle = {
	color: 'white',
	display: 'flex',
	flexDirection: 'column',
	fontFamily: 'Muli',
	cursor: 'pointer'
}

const lineStyle = {
	width: '90px',
	height: '2px',
	backgroundColor: 'white',	
}

export default class extends Component {
	constructor() {
		super()
		this.state = {
			aboutOpen: false,
			contactOpen: false
		}
		this.aboutModal = () => this.setState({aboutOpen: !this.state.aboutOpen})
		this.contactModal = () => this.setState({contactOpen: !this.state.contactOpen})
	}

	render() {
		return (
			<div style={componentStyle}>
				<div style={titleStyle}>
					{'UP Dashboard'}
				</div>

				<div>
					<div
						onClick={this.aboutModal}
						style={buttonStyle}
					>
						About Us
					</div>
					<div style={lineStyle} />
					<AboutButton
						show={this.state.aboutOpen}
						onClose={this.aboutModal}
					>
					</AboutButton>
				</div>

				<div>
					<div
						onClick={this.contactModal}
						style={buttonStyle}
					>
						Contact Us
					</div>
					<div style={lineStyle} />
					<ContactButton
						show={this.state.contactOpen}
						onClose={this.contactModal}
					>
					</ContactButton>
				</div>

			</div>
		)
	}
}