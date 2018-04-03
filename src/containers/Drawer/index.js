import React, { Component } from 'react'

import DrawerButton from './DrawerButton'
import MiscButton from './MiscButton'
import AddButton from './AddButton.js'

const componentStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '704px',
	width: '54px',
	backgroundColor: '#1C232C',
	zIndex: 10
}

let arrayForCategoryOne = ['utility', 'gym', 'admin', 'library', 'museum']
let arrayForCategoryTwo = ['org', 'parking', 'wifi', 'bucket', 'gates']

export default class extends Component {
	constructor() {
		super()
		this.state = {
			addOpen: false,
			arrayOfFeatures: ['building', 'bike', 'jeep', 'rental', 'toilet'],
			newsOpen: false,
			plusStatus: true
		}
		this.newsModal = () => this.setState({newsOpen: !this.state.newsOpen})
		this.addModal = () => this.setState({addOpen: !this.state.addOpen})
		this.removeFeature = this.removeFeature.bind(this)
	}

	removeFeature(icon) {
		const categoryIndex = this.state.arrayOfFeatures.indexOf(icon)
		let removedFeature = this.state.arrayOfFeatures
		removedFeature.splice(categoryIndex, 1)
		this.setState({arrayOfFeatures: removedFeature})
	}

	render() {
		const {
			onChangeMapData,
			mapdata
		} = this.props

		const changeState = (i) => {
			this.state.plusStatus = i
		}

		{this.state.arrayOfFeatures.length >= 8 ? changeState(false) : changeState(true)}
		return (
			<div style={componentStyle}>
				<DrawerButton
					icon={'menu'}
				/>
				{this.state.arrayOfFeatures.map(featureElement => 
					<DrawerButton
						key={featureElement}
						icon={featureElement}
						onChangeMapData={onChangeMapData}
						mapdata={mapdata}
						arrayOfFeatures={this.state.arrayOfFeatures}
						removeFeature={this.removeFeature}
						arrayForCategoryOne={arrayForCategoryOne}
						arrayForCategoryTwo={arrayForCategoryTwo}
					/>
				)}

				<AddButton
					arrayForCategoryOne={arrayForCategoryOne}
					arrayForCategoryTwo={arrayForCategoryTwo}
					status={this.state.plusStatus}
					plusOpen={this.plusOpen}
					onClick={this.addModal}
					icon={'plus'}
					show={this.state.addOpen}
					onClose={this.addModal}
					arrayOfFeatures={this.state.arrayOfFeatures}
				/>

				<div>
					<div onClick={this.newsModal}>
						<DrawerButton
							icon={'news'}
						/>
					</div>
					<MiscButton
						show={this.state.newsOpen}
						onClose={this.newsModal}
					>
					</MiscButton>
				</div>
				
			</div>
		)
	}
}