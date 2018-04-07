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

		const changeColor = (i, jeep) => {
			let buttonColor = null
			switch (i) {
				case 2:
					buttonColor = '#C6010E'
					break
				case 0:
					buttonColor = '#F4670E'
					break
				case 1:
					buttonColor = '#FDCC00'
					break
				case 3:
					buttonColor = '#0B9B00'
					break
				case 4:
					buttonColor = '#0B9B00'
					break
				case 5:
					buttonColor = '#0B9B00'
					break
				default:
					buttonColor = 'white'
					break
			}
			let currentColor = document.getElementsByClassName('mapFilter')[i].style.backgroundColor
			const defaultColor = (jeep) => {
				buttonColor = 'white'
				onChangeMapFilter(0, jeep)
				document.getElementsByClassName('mapFilter')[i].style.backgroundColor = buttonColor
			}

			const newColor = (jeep) => {
				document.getElementsByClassName('mapFilter')[i].style.backgroundColor = buttonColor
				onChangeMapFilter(1, jeep)
			}
			{currentColor !== 'white' ? defaultColor(jeep) : newColor(jeep)}
			
		}

		return (
			<div style={componentStyle}>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(0,'IKOT')}>IKOT</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(1,'TOKI')}>TOKI</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(2,'Katipunan')}>KATIPUNAN</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(3,'SM North')}>SM NORTH</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(4,'Pantranco')}>PANTRANCO</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => changeColor(5,'Philcoa')}>PHILCOA</div>
			</div>
		)
	}
}