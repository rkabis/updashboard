import React, { Component } from 'react'

const componentStyle = {
	display: 'flex',
	flexDirection: 'column',
	cursor: 'pointer',
}

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
						width={iconSize}
						height={iconSize}
						onClick={zoomIn}
					/>
				</div>
				<div>
					<img
						src={require('./icons/out.png')}
						alt={'out'}
						width={iconSize}
						height={iconSize}
						onClick={zoomOut}
					/>
				</div>


			</div>
		)
	}
}