// @flow

import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

type Props = {
  classes: Object,
  container: node,
  theme: Object
}

const drawerWidth = 50

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 100,
    justifyContent: 'space-between'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  mainDiv: {
    backgroundColor: 'pink',
    width: drawerWidth,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  dist: {
    backgroundColor: 'red',
    textAlign: 'center',
    width: '50px',
    margin: 10,
    padding: 10
  },
  red: {
    backgroundColor: 'red'
  }
})

class SideBar extends Component {
  props: Props

  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  render () {
    const { classes, theme } = this.props

    const drawer = (
      <React.Fragment>
        <div className={classes.mainDiv}>
          <div>
            <Divider />

            <List>
              {['Inbox', 'Starred', 'Send email'].map((text, index) => (
                <div button key={text} className={classes.dist}>
                  {text}
                </div>
              ))}
            </List>
            <Divider />
            <List>
              {['Inbox', 'Starred'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </div>

          <div>
            <List>
              {['All mail'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </React.Fragment>
    )

    return (
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="js">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SideBar)
