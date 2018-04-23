import React, { Component } from 'react'

const alyansaStyle = {
	backgroundColor: '#1645A2'
}

const standStyle = {
	backgroundColor: '#FF312A'
}

const kaisaStyle = {
	backgroundColor: '#FFC234'
}

const independentStyle = {
	backgroundColor: '#378352'
}

export default class extends Component {
	render() {
		return (
			<div className='pt2'>
				<div className='pa4 white' style={alyansaStyle}>
					<center>ALYANSA</center>
				</div>
				<div className='pa4 white' style={kaisaStyle}>
					<center>KAISA</center>
				</div>
				<div className='pa4 white' style={standStyle}>
					<center>STAND UP</center>
				</div>
				<div className='pa4 white' style={independentStyle}>
					<center>INDEPENDENT</center><br/><strong>Rein Gallardo</strong><br/>It is time for a student council that is responsive to the safety and security of the entire UP community. Towards a safe UP Diliman! Let us team up for safety. Question and concerns: www.fb.com/MakeItReinSaUSC<br/><br/><strong>Joko Dinsay</strong><br/>Joko Dinsay is your voice of reason in the UP Diliman University Student Council. He envisions a USC by the students, for the students -- not by and for political parties. Visit his Facebook page at fb.com/TeamJoko
				</div>
			</div>
		)
	}
}