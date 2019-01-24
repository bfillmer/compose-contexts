
import React from 'react'
import {Router} from '@reach/router'

import Home from 'Screens/Home'

export function Routes () {
  return (
    <Router>
      <Home default path='/' />
    </Router>
  )
}
