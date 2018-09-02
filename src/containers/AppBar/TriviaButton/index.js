import React, { Component } from 'react'

const backdropStyle = {
  position: 'fixed',
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
  textAlign: 'left'
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
            x
          </div>
          <div style={titleStyle}>
            TRIVIA
          </div>
          <div style={lineStyle} />
          <div style={bodyStyle}>
            The University of the Philippines was established on June 18, 1908 under Act No.1870.
              <br/><br/>
            Presently, UP consists of 7 constituent universities in 15 campuses nationwide.
             <br/><br/>
            UP has already produced 7 Philippine presidents, 13 chief justices, 36 national scientists, 40 national artists, and a number of alumni of various professions in and out of the country.
              <br/><br/>
            CASAA (or College of Arts and Sciences Alumni Association) used to be a favorite food court across the street from the east Wing of Palma Hall in Diliman. To the dismay of its many patrons, however, it was engulfed by fire on June 13.
              <br/><br/>
            Guillermo Tolentino created the Oblation with Professor Anastacio Caedo and Virgilio Raymundo as his models.
          </div>
        </div>
      </div>
    )
  }
}