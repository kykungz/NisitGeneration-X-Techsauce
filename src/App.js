import React, { Component, Fragment } from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import Sidebar from 'react-sidebar'
import SidebarContent from './sections/SidebarContent'

import Navbar from './components/Navbar'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto|Titan+One');
  @import url('https://fonts.googleapis.com/css?family=Kanit:400|Trirong');

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
  }

  h1, h2, h3, h4, p {
    color: white;
  }
`

class App extends Component {
  state = {
    sidebar: false,
  }

  handleClick = () => {
    this.setState({
      sidebar: !this.state.sidebar,
    })
  }

  close = () => {
    this.setState({
      sidebar: false,
    })
  }

  render () {
    const sidebarStyles = {
      root: {
        // Position above overlays or other high z-index elements your app might use
        // zIndex: 1000,
        // Detach from right and bottom screen edges as it blocks underlying content
        // This also has the effect of shrinking the component to a width and height of 0
        right: 'auto',
        bottom: 'auto',
        // Allow child sidebar elements to render now that element has collapsed
        overflow: 'visible'
      },
      content: {
        // Detach from right and bottom screen edges as it blocks underlying content (collapses element)
        left: 'auto',
        bottom: 'auto',
        // The dragHandle is inside content element for some reason.
        // Allow it to render now that the parent is collapsed.
        overflow: 'visible'
      },
      sidebar: {
        // Make sidebar fixed, like dragHandle is by default
        position: 'fixed'
      },
      overlay: {
        // Enable/disable overlay interactivity based on open/closed state
        // pointer-events browser support: IE11+
        pointerEvents: this.state.sidebar ? 'auto' : 'none'
      }
    }
    return (
      <Router>
        <Fragment>
          <Sidebar
            sidebar={
              <SidebarContent handleClick={this.close} />
            }
            pullRight
            styles={sidebarStyles}
            onSetOpen={this.close}
            open={this.state.sidebar}
          />
          <Navbar onHamburgerClick={this.handleClick} />
          <Routes />
        </Fragment>
      </Router>
    )
  }
}

export default hot(module)(App)
