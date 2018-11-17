import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {}
})

class BackgroundMap extends Component {
  render () {
    const { classes } = this.props
    return <div className={classes.root}>BackgroundMap</div>
  }
}

export default withStyles(styles)(BackgroundMap)
