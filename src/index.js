
import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'

import {Application} from 'Atoms/Layout'
import {Routes} from 'Routes'
import AppContext from 'Context/App'

import {theme, GlobalStyle} from 'theme'

function App () {
  return (
    <AppContext>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Application>
          <Routes />
        </Application>
      </ThemeProvider>
    </AppContext>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
