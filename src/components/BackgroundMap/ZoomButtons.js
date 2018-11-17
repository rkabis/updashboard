// @flow

import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
  }
})

const ZoomButtons = (props: Props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Button>
        <Icon>edit_icon</Icon>
      </Button>
      <Button>
        <Icon>edit_icon</Icon>
      </Button>
    </div>
  )
}

export default withStyles(styles)(ZoomButtons)
