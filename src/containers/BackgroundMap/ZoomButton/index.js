import React, { Component } from 'react'

const componentStyle = {
	display: 'flex',
	flexDirection: 'column',
	cursor: 'pointer',
}

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
						width={'34px'}
						height={'34px'}
						onClick={zoomIn}
					/>
				</div>
				<div>
					<img
						src={require('./icons/out.png')}
						alt={'out'}
						width={'34px'}
						height={'34px'}
						onClick={zoomOut}
					/>
				</div>
			</div>
		)
	}
}