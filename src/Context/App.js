
import React from 'react'

import {HelloContextProvider} from './Hello'
import {WorldContextProvider} from './World'

function AppContext ({children}) {
  return (
    <HelloContextProvider>
      <WorldContextProvider>
        {children}
      </WorldContextProvider>
    </HelloContextProvider>
  )
}

export default AppContext
