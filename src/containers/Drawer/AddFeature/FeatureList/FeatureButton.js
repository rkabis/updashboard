import React, { Component } from 'react'
import FeatureTitle from './FeatureTitle.js'

const componentStyle = {
	display: 'flex',
	flexDirection: 'row',
	cursor: 'pointer',
	marginTop: '5px',
}

const iconSize = '25px'

const titleStyle = {
	marginLeft: '7px',
	marginTop: '4px'
}

const featureStyle = {
	display: 'flex',
	flexDirection: 'row'
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