import React, { Component } from 'react'

const componentStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	height: '35px',
	width:'200px',
	marginLeft: '60px',
	marginTop: '65px',
}

const searchSize = '18px'

const searchIconStyle = {
	cursor: 'pointer'
}

const searchBarStyle = {
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: 'white',
	borderRadius: '16px',
	padding: '6px'
}

const searchInputStyle = {
	border: '0',
	paddingLeft: '8px',
	fontFamily: 'Lato',
	fontSize: '10pt'
}

export default class extends Component {
	render() {
		const {
			onChangeMapFilter,
			show
		} = this.props

		const changeFilter = () => {	
			let searchValue = document.getElementById('searchBar').value
			alert(searchValue)
			onChangeMapFilter(1, searchValue)
		}


		return (
			<div style={componentStyle}>
				<div style={searchBarStyle}>
					<img
						style={searchIconStyle}
						src={require('./icons/search.png')}
						alt={'search'}
						height={searchSize}
						width={searchSize}
						onClick={() => changeFilter()}
					/>
					<input
						id="searchBar"
						style={searchInputStyle}
						type='text'
						placeholder={'ENTER CAPACITY...'}
						onKeyPress={(ev) => {
							if (ev.key === 'Enter') {
								changeFilter()
							}
						}}
					/>
				</div>
			</div>
		)
	}
}

