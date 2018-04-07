import React, { Component } from 'react'

const devWidth = (window.screen.width/1280)
const devHeight = (window.screen.height/800)

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50,
  zIndex: 0
}

const modalStyle = {
  backgroundColor: '#fff',
  width: 530*devWidth,
  height: 330*devHeight,
  marginTop: 100*devHeight,
  marginLeft: 340*devWidth,
  overflow: 'scroll',
  fontFamily: 'Lato',
  fontSize: 13,
}

const formTextStyle = {
  color: 'white',
  width: 170*devWidth,
  cursor: 'pointer',
  marginTop: 5*devHeight,
  marginLeft: 8*devWidth
}

const closeStyle = {
  position: 'fixed',
  marginTop: 5*devHeight,
  marginLeft: 500*devWidth,
  fontFamily: 'Lato',
  fontSize: 26,
  color: 'white',
  cursor: 'pointer',
  zIndex: 100
}

const headerStyle = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'row',
  width: 530*devWidth,
  height: 50*devHeight,
  backgroundColor: '#A31F25',
  fontSize: 16
}

const formStyle = {
  marginTop: 50*devHeight
}

const iconSize = 30

const changeButtonStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 11*devHeight,
  marginLeft: 40*devWidth,
  width: 260*devWidth,
}

const changeButtonStyleTwo = {
  display: 'flex',
  flexDirection: 'row',
  width: 280*devWidth,
  height: 39*devHeight,
  backgroundColor: '#79171C',
  paddingTop: 11*devHeight,
  paddingLeft: 30*devWidth
}

const requestForm = <iframe title='Event Request' src="https://docs.google.com/forms/d/e/1FAIpQLScR2oUzpVYisNrzAsy2voF-j1e8uUYWvPhlyEYsdvJkW9qZCQ/viewform?embedded=true" width="530" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
const surveyForm = <iframe title='Dashboard Survey' src="https://docs.google.com/forms/d/e/1FAIpQLSehba86m0qvlBiDFnp_9ol6WXsSD52RnfLK4HO4zP9QFrZFvQ/viewform?embedded=true" width="530" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>

export default class extends Component {
  constructor() {
    super()
    this.state = {
      currentForm: surveyForm
    }
  }

  render() {
    if(!this.props.show) {
      return null
    }

    return (
      <div style={backdropStyle }>
        <div style={modalStyle}>
          <div style={closeStyle} onClick={this.props.onClose}>
            x
          </div>

          <div style={headerStyle}>
            <div style={changeButtonStyle}>
              <img
                src={require('./icons/feedback.png')}
                height={iconSize}
                width={iconSize}
                alt={'feedback'}
              />
              <div style={formTextStyle} onClick={() => this.setState({currentForm: surveyForm})}>
                FEEDBACK
              </div>
            </div>
            <div style={changeButtonStyleTwo}>
              <img
                src={require('./icons/request.png')}
                height={iconSize}
                width={iconSize}
                alt={'request'}
              />
              <div style={formTextStyle} onClick={() => this.setState({currentForm: requestForm})}>
                ADD YOUR EVENT
              </div>
            </div>
          </div>

          <div style={formStyle}>
            {this.state.currentForm}
          </div>
        </div>
      </div>
    )
  }
}