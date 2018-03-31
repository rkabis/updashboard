import React, { Component } from 'react'

export default class extends Component {
	render() {
		const {
			zoomIn,
			zoomOut
		} = this.props
		
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					cursor: 'pointer'
				}}
			>
				<img
					src={require('./icons/in.png')}
					alt={'in'}
					width={'35vw'}
					height={'40vh'}
					onClick={zoomIn}
				/>
				<img
					src={require('./icons/out.png')}
					alt={'out'}
					width={'35vw'}
					height={'40vh'}
					onClick={zoomOut}
				/>
			</div>
		)
	}
}