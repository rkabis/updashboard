import React, { Component } from 'react'
import FeatureTitle from './FeatureTitle.js'

const componentStyle = {
	display: 'flex',
	flexDirection: 'row',
	cursor: 'pointer'
}

export default class extends Component {
	render() {
		const {
			icon,
			arrayForCategory,
			arrayOfFeatures,
			onClose,
			// plusOpen
		} = this.props

		const featureTitle = FeatureTitle(icon)

		return (
			<div
				style={componentStyle}
				onClick={
					() => {
						arrayOfFeatures.push(icon)
						const categoryIndex = arrayForCategory.indexOf(icon)
						this.setState({arrayForCategory: arrayForCategory.splice(categoryIndex, 1)})
						// {arrayOfFeatures.length >= 8 ? plusOpen() : null}
					}
				}
			>
				<div onClick={onClose}>
					<img
						src={require('../../icons/' + icon + '.png')}
						alt={icon}
						width={'35vw'}
						height={'40vh'}
					/>
					{featureTitle}
				</div>
			</div>
		)
	}}