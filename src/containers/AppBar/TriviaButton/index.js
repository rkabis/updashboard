import React, { Component } from 'react'

const backdropStyle = {
  position: 'relative',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50,
}

const modalStyle = {
  backgroundColor: '#fff',
  width: 600,
  height: 350,
  padding: 30,
  overflow: 'scroll',
  margin: 'auto',
  marginTop: 100,
  fontFamily: 'Lato',
  fontSize: 13,
  lineHeight: 1.4
}

const closeStyle = {
  position: 'fixed',
  marginTop: -25,
  marginLeft: 540,
  fontFamily: 'Lato',
  fontSize: 26,
  color: '#3A4047',
  cursor: 'pointer'
}

const titleStyle = {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 5
}

const lineStyle = {
  width: 550,
  height: 2,
  backgroundColor: '#3A4047',
  marginBottom: 5
}

const bodyStyle = {
  textAlign: 'center'
}

export default class extends Component {
  render() {
    if(!this.props.show) {
      return null
    }
    return (
      <div style={backdropStyle} onClick={this.props.onClose}>
        <div style={modalStyle}>
          <div style={closeStyle} onClick={this.props.onClose}>
    
          </div>
          <div style={titleStyle}>
            TRIAL
          </div>
          <div style={lineStyle} />
          <div style={bodyStyle}>
            U P D A S H B O A R D is <b> awesome </b>
            <br/><br/>
          </div>
        </div>
      </div>
    )
  }
}