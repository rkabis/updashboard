import React, { Component }  from 'react'
import MediaQuery from 'react-responsive'

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
  width: 600,
  height: 300,
  margin: 'auto',
  marginTop: 100,
  padding: 30,
  overflow: 'scroll'
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
  fontFamily: 'Lato',
  fontSize: 28,
  fontWeight: 'bold'
}

const backdropStyleTwo = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50
}

const modalStyleTwo = {
  backgroundColor: '#fff',
  width: 300,
  height: 400,
  margin: 'auto',
  padding: 30,
  overflow: 'scroll'
}

const closeStyleTwo = {
  position: 'fixed',
  marginTop: -25,
  marginLeft: 240,
  fontFamily: 'Lato',
  fontSize: 26,
  color: '#3A4047',
  cursor: 'pointer'
}

const titleStyleTwo = {
  fontFamily: 'Lato',
  fontSize: 28,
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
        <MediaQuery minWidth={480}>
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
        </MediaQuery>

        <MediaQuery maxWidth={480}>
          <div style={modalStyleTwo}>
            <div style={closeStyleTwo} onClick={this.props.onClose}>
              x
            </div>
            <div style={titleStyleTwo}>
              Features
            </div>
            <FeatureList
              arrayForCategoryOne={arrayForCategoryOne}
              arrayForCategoryTwo={arrayForCategoryTwo}
              arrayOfFeatures={arrayOfFeatures}
              onClose={onClose}
            />
          </div>
        </MediaQuery>
      </div>
    )
  }
}