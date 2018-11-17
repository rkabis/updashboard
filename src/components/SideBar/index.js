import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {}
})

class SideBar extends Component {
  render () {
    const { classes } = this.props
    return <div className={classes.root}>SideBar</div>
  }
}

export default withStyles(styles)(SideBar)
