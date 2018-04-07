import React, { Component } from 'react'
import FeatureTitle from './FeatureTitle.js'

const componentStyle = {
	display: 'flex',
	flexDirection: 'row',
	cursor: 'pointer',
	marginTop: 5,
}

const iconSize = 25

const titleStyle = {
	marginLeft: 7,
	marginTop: 4
}

const featureStyle = {
	display: 'flex',
	flexDirection: 'row',
	marginLeft: 1
}

export default class extends Component {
	render() {
		const {
			icon,
			arrayForCategory,
			arrayOfFeatures,
			onClose,
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
					}
				}
			>
				<div style={featureStyle} onClick={onClose}>
					<img
						src={require('../../icons/' + icon + '.png')}
						alt={icon}
						width={iconSize}
						height={iconSize}
					/>
					<div style={titleStyle}>
						{featureTitle}
					</div>
				</div>
			</div>
		)
	}}