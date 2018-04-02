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
  width: 500,
  height: 300,
  margin: '0 auto',
  padding: 30,
  overflow: 'scroll'
}

export default class extends Component {
  render() {
    if(!this.props.show) {
      return null
    }

    const {
      arrayOfFeatures,
      onClose,
      arrayForCategoryOne,
      arrayForCategoryTwo
    } = this.props

    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <button onClick={onClose}>
            x
          </button>
          <FeatureList
            arrayForCategoryOne={arrayForCategoryOne}
            arrayForCategoryTwo={arrayForCategoryTwo}
            arrayOfFeatures={arrayOfFeatures}
            onClose={onClose}
          />
        </div>
      </div>
    )
  }
}