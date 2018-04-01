import React, { Component} from 'react'

import DrawerButton from './DrawerButton'
import NewsButton from './NewsButton'
import AddFeature from './AddFeature'

const componentStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	width: '4vw',
	backgroundColor: '#1C232C',
	zIndex: 10,
	overflow: 'hidden'
}

const lineStyle = {
	width: '40px',
	height: '2px',
	backgroundColor: '#3A4047'
}

export default class extends Component {
	constructor() {
		super()
		this.state = {
			addOne: 'plus',
			addTwo: 'plus',
			addOpen: false,
			newsOpen: false
		}
		this.newsModal = () => this.setState({newsOpen: !this.state.newsOpen})
		this.addModal = () => this.setState({addOpen: !this.state.addOpen})
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
				<DrawerButton
					icon={'building'}
					onChangeMapData={onChangeMapData}
					mapdata={mapdata}
				/>
				<DrawerButton
					icon={'bike'}
					onChangeMapData={onChangeMapData}
					mapdata={mapdata}
				/>
				<DrawerButton
					icon={'jeep'}
					onChangeMapData={onChangeMapData}
					mapdata={mapdata}
				/>
				<div style={lineStyle} />
				<DrawerButton
					icon={'rental'}
					onChangeMapData={onChangeMapData}
					mapdata={mapdata}
				/>
				<DrawerButton
					icon={'toilet'}
					onChangeMapData={onChangeMapData}
					mapdata={mapdata}
				/>
				<div style={lineStyle} />

				<DrawerButton
					icon={this.state.addOne}
				/>
				<DrawerButton
					icon={this.state.addTwo}
				/>

				<div>
					<div onClick={this.newsModal}>
						<img
							src={require('./icons/news.png')}
							alt={'news'}
							width={'35vw'}
							height={'40vh'}
						/>
					</div>
					<NewsButton
						show={this.state.newsOpen}
						onClose={this.newsModal}
					>
					</NewsButton>
				</div>
				
			</div>
		)
	}
}