import React, { Component } from 'react'

import AutoComplete from 'material-ui/AutoComplete'

const componentStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	height: '35px',
	width:'200px',
	marginLeft: '60px',
	marginTop: '65px',
}

const searchSize = '20px'

const searchIconStyle = {
	cursor: 'pointer',
	marginTop: '1px',
	marginLeft: '2px'
}

const searchBarStyle = {
	display: 'flex',
	width: '200px',
	flexDirection: 'row',
	backgroundColor: 'white',
	borderRadius: '16px',
	padding: '6px',
}

const searchInputStyle = {
	position: 'absolute',
	width: '150px',
	height: '30px',
	fontFamily: 'Lato',
	fontSize: '10pt',
	marginLeft: '30px',
	marginTop: '-11.5px',
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
      let tempName = fileSource.features[x].properties.officeName;
      if (tempName == null) {
        tempName = "";
      };
      choices.push(tempName);
     }
		for (let x=0; x<fileSource.features.length; x++) {
      let tempName = fileSource.features[x].properties.adminName;
      if (tempName == null) {
        tempName = "";
      };
      choices.push(tempName);
     }

		return (
			<div 
				style={componentStyle}						
				onKeyPress={(ev) => {
					if (ev.key === 'Enter') {
						changeFilter()
							}
					}}
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
						hintText="ENTER ADMIN..."
					/>
				</div>
			</div>
		)
	}
}