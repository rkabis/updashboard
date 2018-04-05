import React, { Component } from 'react'

const componentStyle = {
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	height: '150px',
	width:'150px',
	marginLeft: '60px',
	marginTop: '60px'
}

const buttonStyle = {
	fontFamily: 'Lato',
	fontSize: '10pt',
	backgroundColor: 'white',
	marginTop: '5px',
	padding: '3px',
	cursor: 'pointer'
}

export default class extends Component {
	render() {
		const {
			onChangeMapFilter
		} = this.props

		const changeColor = (i, utility) => {
			let buttonColor = null
			let currentColor = document.getElementsByClassName('mapFilter')[i].style.backgroundColor
			const defaultColor = (utility) => {
				buttonColor = 'white'
				onChangeMapFilter(0, utility)
				document.getElementsByClassName('mapFilter')[i].style.backgroundColor = buttonColor
				document.getElementsByClassName('mapFilter')[i].style.color = 'black'
			}

			const newColor = (utility) => {
				buttonColor = '#3A4047'
				document.getElementsByClassName('mapFilter')[i].style.backgroundColor = buttonColor
				document.getElementsByClassName('mapFilter')[i].style.color = 'white'
				onChangeMapFilter(1, utility)
			}
			{currentColor !== 'white' ? defaultColor(utility) : newColor(utility)}
		}

		return (
			<div style={componentStyle}>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(0,'ATM')}>ATM</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(1,'Bank')}>BANK</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(2,'Computer Shop')}>COMPUTER SHOP</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(3,'Money Changer')}>MONEY CHANGER</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(4,'Postal')}>POSTAL</div>
			</div>
		)
	}
}