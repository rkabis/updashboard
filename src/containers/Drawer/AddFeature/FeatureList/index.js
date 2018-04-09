import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import FeatureButton from './FeatureButton.js'

const lineStyle = {
	height: 2,
	width: 225,
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
	marginLeft: 90
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
			<div>
			<MediaQuery minWidth={480}>
				<div style={categoryStyle}>
					<div>
						THE BASICS
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
						FOR FUN
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
			</MediaQuery>

			<MediaQuery maxWidth={480}>
				<div className='flex flex-column mt2'>
					<div>
						THE BASICS
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
					<div className='mt2'>
						FOR FUN
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
			</MediaQuery>
			</div>
		)
	}
}