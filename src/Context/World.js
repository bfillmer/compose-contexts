
import React from 'react'

const WorldContext = React.createContext('')

export function WorldContextProvider ({children}) {
  const [state, setState] = React.useState('')

  React.useEffect(() => {
    setState('world')
  }, [])

  return (
    <WorldContext.Provider value={state}>
      {children}
    </WorldContext.Provider>
  )
}

export default WorldContext
