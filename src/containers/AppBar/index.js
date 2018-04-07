import React, { Component } from 'react'

import ContactButton from './ContactButton'
import AboutButton from './AboutButton'

const devWidth = (window.screen.width/1280)
const devHeight = (window.screen.height/800)

const componentStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: '#A31F25',
	width: 1226*devWidth,
	height: 54*devHeight,
	marginLeft: 54*devWidth,
	zIndex: 10,
}

const titleStyle = {
	color: 'white',
	fontFamily: 'Maven Pro',
	marginLeft: 21*devWidth,
	fontSize: 24,
	marginTop: 12*devHeight
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
	width: 78*devWidth,
	height: 7*devHeight,
	backgroundColor: 'white',
	marginTop: 14*devHeight,
	marginLeft: 2*devWidth
}

const contactlineStyle = {
	width: 90*devWidth,
	height: 7*devHeight,
	backgroundColor: 'white',
	marginTop: 14*devHeight,
	marginLeft: 6*devWidth
}

const contactStyle = {
	marginLeft: 38*devWidth
}

const buttonGroupStyle = {
	display: 'flex',
	flexDirection: 'row',
	marginLeft: 780*devWidth,
	marginTop: 20*devHeight
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