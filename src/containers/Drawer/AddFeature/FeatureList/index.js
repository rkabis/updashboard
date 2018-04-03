import React, { Component } from 'react'

import FeatureButton from './FeatureButton.js'

// let arrayForCategoryOne = ['utility', 'gym', 'admin', 'library', 'museum']
// let arrayForCategoryTwo = ['org', 'parking', 'wifi', 'bucket', 'gates']

export default class extends Component {
	render() {
		const {
			arrayOfFeatures,
			onClose,
			arrayForCategoryOne,
			arrayForCategoryTwo
		} = this.props

		return (
			<div>
				{'Features'}
				<div>
					{'Category 1'}			
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
				<div>
					{'Category 2'}
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