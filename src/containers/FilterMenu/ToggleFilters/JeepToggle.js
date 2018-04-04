import React, { Component } from 'react'

export default class extends Component {
	render() {
		const {
			onChangeMapFilter
		} = this.props

		return (
			<div>
				<button onClick={() => onChangeMapFilter('IKOT')}>IKOT</button>
				<button onClick={() => onChangeMapFilter('TOKI')}>TOKI</button>
			</div>
		)
	}
}