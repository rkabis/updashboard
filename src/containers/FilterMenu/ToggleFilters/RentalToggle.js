import React, { Component } from 'react'

const componentStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	height: 35,
	width: 200,
	marginLeft: 60,
	marginTop: 65,
}

const searchSize = 18

const searchIconStyle = {
	cursor: 'pointer'
}

const searchBarStyle = {
	display: 'flex',
	flexDirection: 'row',
	backgroundColor: 'white',
	borderRadius: 16,
	padding: 6
}

const searchInputStyle = {
	border: '0',
	paddingLeft: 8,
	fontFamily: 'Lato',
	fontSize: 13
}

export default class extends Component {
	render() {
		const {
			onChangeMapFilter,
			resetFilter
		} = this.props

		const changeFilter = () => {
			resetFilter()
			let searchValue = document.getElementById('searchBar').value
			onChangeMapFilter(1, searchValue)
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
					<input
						id="searchBar"
						style={searchInputStyle}
						type='text'
						placeholder={'ENTER CAPACITY...'}
					/>
				</div>
			</div>
		)
	}
}

