import React, { Component } from 'react'

import DrawerButton from './DrawerButton'
import AddFeature from './AddFeature'

export default class extends Component {
	render() {
    if(!this.props.status) {
      return null
    }

		const {
			plusOpen,
			onClick,
			icon,
			show,
			onClose,
			arrayOfFeatures,
		} = this.props

		return (
			<div>
				<div onClick={onClick}>
					<DrawerButton
						icon={icon}
					/>
				</div>
				<AddFeature
					plusOpen={plusOpen}
					show={show}
					onClose={onClose}
					arrayOfFeatures={arrayOfFeatures}
				>
				</AddFeature>
			</div>
		)
	}
}