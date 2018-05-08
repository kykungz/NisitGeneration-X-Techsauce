import React, { Fragment } from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Navbar from './components/Navbar'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background: #111111;
  }
`

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Routes />
    </Fragment>
  </Router>
)

export default hot(module)(App)
