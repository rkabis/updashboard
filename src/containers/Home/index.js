import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		height: '100vh',
		width: '100%',
	}
})

class Home extends Component {
  render () {
  	const { classes } = this.props
    return (
      <div className={classes.root}>
      	Test
      </div>
	)
  }
}

export default withStyles(styles)(Home)
