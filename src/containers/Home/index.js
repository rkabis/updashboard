// @flow

import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Header, SideBar, BackgroundMap } from '../../components'

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {}
})

class Home extends Component {
  props: Props

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Header />
        <SideBar />
        <BackgroundMap />
      </div>
    )
  }
}

export default withStyles(styles)(Home)
