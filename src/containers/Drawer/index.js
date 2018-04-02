import React, { Component } from 'react'

import DrawerButton from './DrawerButton'
import MiscButton from './MiscButton'
import AddFeature from './AddFeature'
import AddButton from './AddButton.js'

const componentStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	width: '4vw',
	backgroundColor: '#1C232C',
	zIndex: 10,
	overflow: 'hidden'
}

export default class extends Component {
	constructor() {
		super()
		this.state = {
			addOpen: false,
			arrayOfFeatures: ['building', 'bike', 'jeep', 'rental', 'toilet'],
			newsOpen: false,
			plusOpen: true
		}
		this.newsModal = () => this.setState({newsOpen: !this.state.newsOpen})
		this.addModal = () => this.setState({addOpen: !this.state.addOpen})
		this.plusButton = () => this.setState({plusOpen: !this.state.addOpen})
	}

	render() {
		const {
			onChangeMapData,
			mapdata
		} = this.props

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
					/>
				)}

				<AddButton
					status={this.state.plusOpen}
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