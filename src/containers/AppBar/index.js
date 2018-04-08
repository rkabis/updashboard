import React, { Component } from 'react'

import ContactButton from './ContactButton'
import AboutButton from './AboutButton'

const componentStyle = {
	backgroundColor: '#A31F25',
	height: 54,
	zIndex: 10,
}

const titleStyle = {
	color: 'white',
	fontFamily: 'Maven Pro',
	marginLeft: 70,
	fontSize: 24,
	marginTop: 12
}

const buttonStyle = {
	color: 'white',
	display: 'flex',
	flexDirection: 'column',
	fontFamily: 'Muli',
	letterSpacing: 2,
	cursor: 'pointer',
	fontSize: 13
}

const aboutLineStyle = {
	width: 78,
	height: 7,
	backgroundColor: 'white',
	marginTop: 14,
	marginLeft: 2
}

const contactlineStyle = {
	width: 90,
	height: 7,
	backgroundColor: 'white',
	marginTop: 14,
	marginLeft: 6
}

const contactStyle = {
	marginLeft: 38
}

const buttonGroupStyle = {
	display: 'flex',
	flexDirection: 'row',
	marginTop: 20,
	marginRight: 25
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
			<div
				className='flex flex-row justify-between w-100 absolute top-0 left-0'
				style={componentStyle}
			>
				<div style={titleStyle}>
					{'UP Dashboard'}
				</div>

				<div style={buttonGroupStyle}>
					<div>
						<div
							onClick={this.aboutModal}
							style={buttonStyle}
						>
							ABOUT US
						</div>
						<div style={aboutLineStyle} />
						<AboutButton
							show={this.state.aboutOpen}
							onClose={this.aboutModal}
						>
						</AboutButton>
					</div>

					<div style={contactStyle}>
						<div
							onClick={this.contactModal}
							style={buttonStyle}
						>
							CONTACT US
						</div>
						<div style={contactlineStyle} />
						<ContactButton
							show={this.state.contactOpen}
							onClose={this.contactModal}
						>
						</ContactButton>
					</div>
				</div>

			</div>
		)
	}
}