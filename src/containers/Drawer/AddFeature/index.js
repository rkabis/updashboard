import React, { Component }  from 'react'

import FeatureList from './FeatureList'

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

export default class extends Component {
  render() {
    if(!this.props.show) {
      return null
    }

    const {
      arrayOfFeatures
    } = this.props

    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <button onClick={this.props.onClose}>
            x
          </button>
          <FeatureList
            arrayOfFeatures={arrayOfFeatures}
          />
        </div>
      </div>
    )
  }
}