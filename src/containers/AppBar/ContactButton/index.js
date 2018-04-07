import React, { Component } from 'react'

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
  width: 530,
  height: 330,
  marginTop: 100,
  marginLeft: 340,
  overflow: 'scroll',
  fontFamily: 'Lato',
  fontSize: 13,
}

const formTextStyle = {
  color: 'white',
  width: 170,
  cursor: 'pointer',
  marginTop: 5,
  marginLeft: 8
}

const closeStyle = {
  position: 'fixed',
  marginTop: 5,
  marginLeft: 500,
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
  width: 530,
  height: 50,
  backgroundColor: '#A31F25',
  fontSize: 16
}

const formStyle = {
  marginTop: 50
}

const iconSize = 30

const changeButtonStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 11,
  marginLeft: 40,
  width: 260,
}

const changeButtonStyleTwo = {
  display: 'flex',
  flexDirection: 'row',
  width: 280,
  height: 39,
  backgroundColor: '#79171C',
  paddingTop: 11,
  paddingLeft: 30
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