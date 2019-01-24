
import React from 'react'

const HelloContext = React.createContext('')

export function HelloContextProvider ({children}) {
  const [state, setState] = React.useState('')

  React.useEffect(() => {
    setState('hello')
  }, [])

  return (
    <HelloContext.Provider value={state}>
      {children}
    </HelloContext.Provider>
  )
}

export default HelloContext
