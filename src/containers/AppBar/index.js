import React, { Component } from 'react'

import ContactButton from './ContactButton'
import AboutButton from './AboutButton'

const componentStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: '#A31F25',
	width: '1280px',
	height: '54px',
	marginLeft: '54px',
	zIndex: 10,
}

const titleStyle = {
	color: 'white',
	fontFamily: 'Maven Pro',
	marginLeft: '21px',
	fontSize: '18pt',
	marginTop: '12px'
}

const buttonStyle = {
	color: 'white',
	display: 'flex',
	flexDirection: 'column',
	fontFamily: 'Muli',
	letterSpacing: '2px',
	cursor: 'pointer',
	fontSize: '10pt'
}

const aboutLineStyle = {
	width: '78px',
	height: '7px',
	backgroundColor: 'white',
	fontSize: '8pt',
	marginTop: '14px',
	marginLeft: '2px'
}

const contactlineStyle = {
	width: '90px',
	height: '7px',
	backgroundColor: 'white',
	fontSize: '8pt',
	marginTop: '14px',
	marginLeft: '6px'
}

const contactStyle = {
	marginLeft: '38px'
}

const buttonGroupStyle = {
	display: 'flex',
	flexDirection: 'row',
	marginLeft: '780px',
	marginTop: '20px'	
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