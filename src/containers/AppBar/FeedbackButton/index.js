import React from 'react'

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

const feedbackText = {
	content: 'feedback yo'
}

export default class AboutButton extends React.Component {
  render() {
    if(!this.props.show) {
      return null
    }
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
        	{feedbackText.content}
          <button onClick={this.props.onClose}>
            x
          </button>
        </div>
      </div>
    )
  }
}