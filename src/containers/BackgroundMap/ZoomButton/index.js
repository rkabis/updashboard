import React, { Component } from 'react'

const componentStyle = {
	display: 'flex',
	flexDirection: 'column',
	cursor: 'pointer',
}

const devWidth = (window.screen.width/1280)
const devHeight = (window.screen.height/800)

const iconSize = 34

export default class extends Component {
	render() {
		const {
			zoomIn,
			zoomOut
		} = this.props
		
		return (
			<div style={componentStyle}>
				<div>
					<img
						src={require('./icons/in.png')}
						alt={'in'}
						width={iconSize*devWidth}
						height={iconSize*devHeight}
						onClick={zoomIn}
					/>
				</div>
				<div>
					<img
						src={require('./icons/out.png')}
						alt={'out'}
						width={iconSize*devWidth}
						height={iconSize*devHeight}
						onClick={zoomOut}
					/>
				</div>
			</div>
		)
	}
}