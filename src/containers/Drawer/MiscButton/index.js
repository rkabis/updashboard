import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import Weather from './Weather'
import News from './News'

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
  width: 600,
  height: 300,
  margin: 'auto',
  marginTop: 100,
  padding: 30,
  overflow: 'scroll',
  fontFamily: 'Lato',
  fontSize: 13,
}

const lineStyle = {
  width: 550,
  height: 2,
  backgroundColor: '#3A4047'
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

export default class extends Component {
  render() {
    if(!this.props.show) {
      return null
    }
    return (
      <MediaQuery minWidth={480}>
        <div style={backdropStyle}>
          <div style={modalStyle}>
            <div style={closeStyle} onClick={this.props.onClose}>
              x
            </div>
            <Weather />
            <div style={lineStyle} />
            <News />
          </div>
        </div>
      </MediaQuery>
    )
  }
}