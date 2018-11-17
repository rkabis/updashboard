import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {}
})

class Header extends Component {
  render () {
    const { classes } = this.props
    return <div className={classes.root}>Header</div>
  }
}

export default withStyles(styles)(Header)
