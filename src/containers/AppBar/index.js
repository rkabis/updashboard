import React, { Component } from 'react'

import AppButton from './AppButton'

export default class extends Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					backgroundColor: '#A31F25',
					width: '97vw',
					height: '6vh',
					zIndex: 10,
					overflow: 'hidden'
				}}
			>
				<div
					style={{
						color: 'white',
						fontFamily: 'Maven Pro'
					}}
				>
					{'UP Dashboard'}
				</div>

				<AppButton
					title={'ABOUT US'}
				/>
				<AppButton
					title={'FEEDBACK'}
				/>
			</div>
		)
	}
}