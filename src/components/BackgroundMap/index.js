// @flow

import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Map, TileLayer } from 'react-leaflet'
import Control from 'react-leaflet-control'

import ZoomButtons from './ZoomButtons'

type Props = {
  classes: Object
}

const mapboxTiles = process.env.REACT_APP_MAPBOX_TILES
const mapboxAttr = process.env.REACT_APP_MAPBOX_ATTR
const mapboxId = process.env.REACT_APP_MAPBOX_ID
const mapboxAccess = process.env.REACT_APP_MAPBOX_ACCESS

const styles = theme => ({
  root: {
    zIndex: -1
  }
})

class BackgroundMap extends Component {
  props: Props

  state = {
    mapCenter: [14.654912, 121.064264],
    zoomLevel: 16
  }

  render () {
    const { classes } = this.props
    const { mapCenter, zoomLevel } = this.state

    return (
      <div className={classes.root}>
        <Map center={mapCenter} zoom={zoomLevel} zoomControl={false}>
          <TileLayer
            attribution={mapboxAttr}
            url={mapboxTiles}
            id={mapboxId}
            accessToken={mapboxAccess}
          />
          <Control position="topleft">
            <ZoomButtons />
          </Control>
        </Map>
      </div>
    )
  }
}

export default withStyles(styles)(BackgroundMap)
