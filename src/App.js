import React, { Fragment } from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import Navbar from './components/Navbar'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Titan+One');
  @import url('https://fonts.googleapis.com/css?family=Kanit:400|Trirong');

  ${'' /* * {
    font-family: 'Open Sans', sans-serif;

  } */}
  body {
    font-family: 'Kanit', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background: #111111;
  }

  p {
    color: #dddddd !important;
    font-size: 19px;
    font-family: sans-serif;
    ${'' /* font-family: 'Trirong'; */}
  }

  h1, h2, h3, h4, p {
    color: white;
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
