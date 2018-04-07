import React, { Component } from 'react'

import FeatureButton from './FeatureButton.js'

const lineStyle = {
	height: 2,
	width: 200,
	backgroundColor: '#3A4047',
	marginTop: 5,
	marginBottom: 8,
	justifyContent: 'space-between'
}

const categoryStyle = {
	display: 'flex',
	flexDirection: 'row',
	marginTop: 20
}

const categoryTwoStyle = {
	marginLeft: 80
}
export default class extends Component {
	render() {
		const {
			arrayOfFeatures,
			onClose,
			arrayForCategoryOne,
			arrayForCategoryTwo
		} = this.props

		return (
			<div style={categoryStyle}>
				<div>
					CATEGORY ONE
					<div style={lineStyle} />	
					{arrayForCategoryOne.map(featureElement => 
						<FeatureButton
							key={featureElement}
							icon={featureElement}
							arrayForCategory={arrayForCategoryOne}
							arrayOfFeatures={arrayOfFeatures}
							onClose={onClose}
						/>
					)}
				</div>
				<div style={categoryTwoStyle}>
					CATEGORY TWO
					<div style={lineStyle} />
					{arrayForCategoryTwo.map(featureElement => 
						<FeatureButton
							key={featureElement}
							icon={featureElement}
							arrayForCategory={arrayForCategoryTwo}
							arrayOfFeatures={arrayOfFeatures}
							onClose={onClose}
						/>
					)}
				</div>
			</div>
		)
	}
}