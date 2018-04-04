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
  width: '530px',
  height: '330px',
  marginTop: '100px',
  marginLeft: ' 340px',
  overflow: 'scroll',
  fontFamily: 'Lato',
  fontSize: '10pt',
}

const formTextStyle = {
  color: 'white',
  width: '170px',
  cursor: 'pointer',
  marginTop: '5px',
  marginLeft: '8px'
}

const closeStyle = {
  position: 'fixed',
  marginTop: '5px',
  marginLeft: '500px',
  fontFamily: 'Lato',
  fontSize: '20pt',
  color: 'white',
  cursor: 'pointer',
  zIndex: '100'
}

const headerStyle = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'row',
  width: '530px',
  height: '50px',
  backgroundColor: '#A31F25',
  fontSize: '12pt'
}

const formStyle = {
  marginTop: '50px'
}

const iconSize = '30px'

const changeButtonStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '11px',
  marginLeft: '40px',
  width: '260px',
}

const changeButtonStyleTwo = {
  display: 'flex',
  flexDirection: 'row',
  width: '280px',
  height: '39px',
  backgroundColor: '#79171C',
  paddingTop: '11px',
  paddingLeft: '30px'
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
      <div style={backdropStyle}>
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