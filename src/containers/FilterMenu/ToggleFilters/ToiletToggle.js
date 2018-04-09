import React, { Component } from 'react'

const componentStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	height: 150,
	width: 150,
	marginLeft: 60,
	marginTop: 60
}

const buttonStyle = {
	fontFamily: 'Lato',
	fontSize: 13,
	backgroundColor: 'white',
	marginTop: 5,
	padding: 3,
	cursor: 'pointer'
}

export default class extends Component {
	render() {
		const {
			onChangeMapFilter
		} = this.props

		const changeColor = (i, toilet) => {
			let buttonColor = null
			let currentColor = document.getElementsByClassName('mapFilter')[i].style.backgroundColor
			const defaultColor = (toilet) => {
				buttonColor = 'white'
				onChangeMapFilter(0, toilet)
				document.getElementsByClassName('mapFilter')[i].style.backgroundColor = buttonColor
				document.getElementsByClassName('mapFilter')[i].style.color = 'black'
			}

			const newColor = (toilet) => {
				buttonColor = '#3A4047'
				document.getElementsByClassName('mapFilter')[i].style.backgroundColor = buttonColor
				document.getElementsByClassName('mapFilter')[i].style.color = 'white'
				onChangeMapFilter(1, toilet)
			}
			{currentColor !== 'white' ? defaultColor(toilet) : newColor(toilet)}
		}

		return (
			<div style={componentStyle}>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(0,'bidet')}>WITH BIDET</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(1,'handsoap')}>WITH HANDSOAP</div>
			</div>
		)
	}
}