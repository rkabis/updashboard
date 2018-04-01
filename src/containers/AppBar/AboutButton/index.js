import React, { Component } from 'react'

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50
}

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30
}

const aboutText = {
	content: 'We are a group of students who love data. We believe that nothing is impossible if you have the right information, and so we want to make data as accessible as possible to everyone in the UP Diliman community. Our goal is to compile everything you’ll ever need to know about the campus, and present them on one reliable and easily-to-use platform. From looking up jeepney routes to planning your daily jogging route, our map-based interface is an easy and convenient way to master your campus. Best of all, you can access the UP Dashboard from anywhere, at any time using your laptop, tablet, or phone. Right now, we’re in the process of adding more and more features to the Dashboard. We hope you understand that the platform may contain bugs and errors, and we need your help to spot them. Simply send us your comments and suggestions using the Feedback tab below, and we’ll be sure to resolve them as quickly as possible. Finally, you can reach us directly at updashboardproject@gmail.com. Thank you, and welcome home!'
}

export default class extends Component {
  render() {
    if(!this.props.show) {
      return null
    }
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
        	{aboutText.content}
          <button onClick={this.props.onClose}>
            x
          </button>
        </div>
      </div>
    )
  }
}