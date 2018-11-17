import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Header, SideBar, BackgroundMap } from '../../components'

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100%'
  }
})

class Home extends Component {
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
