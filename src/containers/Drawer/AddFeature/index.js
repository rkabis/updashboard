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
  width: '500px',
  height: '300px',
  marginTop: '100px',
  marginLeft: ' 340px',
  padding: 30,
  overflow: 'scroll'
}

const closeStyle = {
  position: 'fixed',
  marginTop: '-25px',
  marginLeft: '500px',
  fontFamily: 'Lato',
  fontSize: '20pt',
  color: '#3A4047',
  cursor: 'pointer'
}

const titleStyle = {
  fontFamily: 'Lato',
  fontSize: '22pt',
  fontWeight: 'bold'
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
      <div style={backdropStyle} onClick={this.props.onClose}>
        <div style={modalStyle}>
          <div style={closeStyle} onClick={this.props.onClose}>
            x
          </div>
          <div style={titleStyle}>
            Features
          </div>
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