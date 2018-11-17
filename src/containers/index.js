import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './Home'
import NotFound from './NotFound'

class Containers extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route path='*' render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
	)
  }
}

export default Containers
