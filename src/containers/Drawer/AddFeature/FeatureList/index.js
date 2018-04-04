import React, { Component } from 'react'

import FeatureButton from './FeatureButton.js'

const lineStyle = {
	height: '2px',
	width: '200px',
	backgroundColor: '#3A4047',
	marginTop: '5px',
	marginBottom: '8px',
	justifyContent: 'space-between'
}

const categoryStyle = {
	display: 'flex',
	flexDirection: 'row',
	marginTop: '20px'
}

const categoryTwoStyle = {
	marginLeft: '80px'
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