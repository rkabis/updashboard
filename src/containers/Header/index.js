import React, { Component } from 'react'

import Button from './Button'

export default class extends Component {
	render() {
		return (
			<div
				style={{
					position: 'fixed',
					display: 'flex',
					flexDirection: 'row',
					backgroundColor: '#A31F25',
					width: '95vw',
					height: '7vh'
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

				<Button
					title={'ABOUT US'}
				/>
				<Button
					title={'FEEDBACK'}
				/>
			</div>
		)
	}
}