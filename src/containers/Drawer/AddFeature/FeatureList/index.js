import React, { Component } from 'react'

import FeatureButton from './FeatureButton.js'

export default class extends Component {
	constructor() {
		super()
		this.state = {
			arrayForCategoryOne: ['utility', 'gym', 'admin', 'library', 'museum'],
			arrayForCategoryTwo: ['org', 'parking', 'wifi', 'bucket', 'gates']
		}
	}

	render() {
		const {
			arrayOfFeatures
		} = this.props
		return (
			<div>
				{'Features'}
				<div>
					{'Category 1'}			
					{this.state.arrayForCategoryOne.map(featureElement => 
						<FeatureButton
							key={featureElement}
							icon={featureElement}
							arrayForCategory={this.state.arrayForCategoryOne}
							arrayOfFeatures={arrayOfFeatures}
						/>
					)}
				</div>
				<div>
					{'Category 2'}
					{this.state.arrayForCategoryTwo.map(featureElement => 
						<FeatureButton
							key={featureElement}
							icon={featureElement}
							arrayForCategory={this.state.arrayForCategoryTwo}
							arrayOfFeatures={arrayOfFeatures}
						/>
					)}
				</div>
			</div>
		)
	}
}