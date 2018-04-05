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
	fontSize: '12pt',
	backgroundColor: 'white',
	marginTop: '3px',
	padding: '3px',
	cursor: 'pointer'
}

export default class extends Component {
	render() {
		const {
			onChangeMapFilter
		} = this.props

		const changeColor = (i) => {
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
			const changeColor = () => {
				buttonColor = 'white'
			}
			{currentColor !== 'white' ? changeColor() : null}
			document.getElementsByClassName('mapFilter')[i].style.backgroundColor = buttonColor
		}
		return (
			<div style={componentStyle}>
				<div className='mapFilter' style={buttonStyle} onClick={() => {onChangeMapFilter('IKOT'), changeColor(0)}}>IKOT</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => {onChangeMapFilter('TOKI'), changeColor(1)}}>TOKI</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => {onChangeMapFilter('Katipunan'), changeColor(2)}}>KATIPUNAN</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => {onChangeMapFilter('SM North'), changeColor(3)}}>SM NORTH</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => {onChangeMapFilter('Pantranco'), changeColor(4)}}>PANTRANCO</div>
				<div className='mapFilter' style={buttonStyle} onClick={() => {onChangeMapFilter('Philcoa'), changeColor(5)}}>PHILCOA</div>
			</div>
		)
	}
}