// @flow

import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {}
})

class SideBar extends Component {
  props: Props
  render () {
    const { classes } = this.props
    return <div className={classes.root}>SideBar</div>
  }
}

export default withStyles(styles)(SideBar)
