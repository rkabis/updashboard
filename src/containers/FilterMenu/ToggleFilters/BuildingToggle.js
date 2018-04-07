import React, { Component } from 'react'

import AutoComplete from 'material-ui/AutoComplete'

const componentStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	height: 35,
	width: 200,
	marginLeft: 60,
	marginTop: 65,
}

const searchSize = 20

const searchIconStyle = {
	cursor: 'pointer',
	marginTop: 1,
	marginLeft: 2
}

const searchBarStyle = {
	display: 'flex',
	width: 200,
	flexDirection: 'row',
	backgroundColor: 'white',
	borderRadius: 16,
	padding: 6,
}

const searchInputStyle = {
	position: 'absolute',
	width: 150,
	height: 30,
	fontFamily: 'Lato',
	fontSize: 10,
	marginLeft: 30,
	marginTop: -11.5,
	overflow: 'hidden',
}

export default class extends Component {
	render() {
		const {
			onChangeMapFilter,
			show
		} = this.props

		const changeFilter = () => {	
			let searchValue = document.getElementById('searchBar').value
			onChangeMapFilter(1, searchValue)
		}

		let fileSource = require('../../BackgroundMap/geojson/UP' + show + '.json')
		let choices = []
		for (let x=0; x<fileSource.features.length; x++) {
      let tempName = fileSource.features[x].properties.buildingName;
      if (tempName == null) {
        tempName = "";
      };
      choices.push(tempName);
     }

		return (
			<div 
				style={componentStyle}						
			>
				<div style={searchBarStyle}>
					<img
						style={searchIconStyle}
						src={require('./icons/search.png')}
						alt={'search'}
						height={searchSize}
						width={searchSize}
						onClick={() => changeFilter()}
					/>
					<AutoComplete
						style={searchInputStyle}
						id="searchBar"
						dataSource={choices}
						filter={AutoComplete.caseInsensitiveFilter}
						maxSearchResults={5}
						onNewRequest={() => changeFilter()}
						hintText="ENTER BUILDING..."
					/>
				</div>
			</div>
		)
	}
}