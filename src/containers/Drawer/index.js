import React, { Component } from 'react'

import DrawerButton from './DrawerButton'
import MiscButton from './MiscButton'
import AddButton from './AddButton.js'

const devWidth = (window.screen.width/1280)
const devHeight = (window.screen.height/800)

const componentStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	height: 704*devHeight,
	width: 54*devWidth,
	backgroundColor: '#1C232C',
	overflow: 'hidden',
	zIndex: 20
}

const lineStyle = {
	height: 2*devHeight,
	width: 40*devWidth,
	backgroundColor: '#3A4047',
	margin: 4
}

const menuStyle = {
	marginTop: 3*devHeight,
	marginLeft: 12*devWidth
}

const firstSetStyle = {
	marginLeft: 12*devWidth,
	marginTop: 10*devHeight,
	marginBottom: 8*devHeight
}

const secondSetStyle = {
	marginLeft: 12*devWidth,
	marginBottom: 8*devHeight
}

const miscStyle = {
	position: 'fixed',
	marginLeft: 12*devWidth,
	marginTop: 650*devHeight
}

let arrayForCategoryOne = ['utility', 'gym', 'admin', 'library', 'museum']
let arrayForCategoryTwo = ['org', 'parking', 'wifi', 'bucket', 'gates']

export default class extends Component {
	constructor() {
		super()
		this.state = {
			addOpen: false,
			arrayOfFeatures: [],
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
			mapdata,
			filterModal,
			resetFilter
		} = this.props

		const changeState = (i) => {
			this.state.plusStatus = i
		}

		{this.state.arrayOfFeatures.length >= 3 ? changeState(false) : changeState(true)}
		
		return (
			<div style={componentStyle}>
				<div style={menuStyle}>
					<DrawerButton
						icon={'menu'}
					/>
				</div>
				<div style={firstSetStyle}>
					<DrawerButton
						icon={'building'}
						onChangeMapData={onChangeMapData}
						mapdata={mapdata}
						filterModal={filterModal}
						resetFilter={resetFilter}
					/>

					<DrawerButton
						icon={'bike'}
						onChangeMapData={onChangeMapData}
						mapdata={mapdata}
						filterModal={filterModal}
						resetFilter={resetFilter}
					/>

					<DrawerButton
						icon={'jeep'}
						onChangeMapData={onChangeMapData}
						mapdata={mapdata}
						filterModal={filterModal}
						resetFilter={resetFilter}
					/>	

				</div>

				<div style={lineStyle} />

				<div style={secondSetStyle}>
					<DrawerButton
						icon={'rental'}
						onChangeMapData={onChangeMapData}
						mapdata={mapdata}
						filterModal={filterModal}
						resetFilter={resetFilter}
					/>

					<DrawerButton
						icon={'toilet'}
						onChangeMapData={onChangeMapData}
						mapdata={mapdata}
						filterModal={filterModal}
						resetFilter={resetFilter}
					/>
				</div>

				<div style={lineStyle} />

				<div style={secondSetStyle}>
					{this.state.arrayOfFeatures.map(featureElement => 
						<DrawerButton
							key={featureElement}
							icon={featureElement}
							onChangeMapData={onChangeMapData}
							mapdata={mapdata}
							filterModal={filterModal}
							resetFilter={resetFilter}
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
				</div>

				<div style={miscStyle}>
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