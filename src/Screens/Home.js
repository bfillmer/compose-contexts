
import React from 'react'

import {Heading, P} from 'Atoms/Text'
import {Section} from 'Atoms/Layout'
import HelloContext from 'Context/Hello'
import WorldContext from 'Context/World'

function Home () {
  const hello = React.useContext(HelloContext)
  const world = React.useContext(WorldContext)

  return (
    <Section>
      <Heading>Home</Heading>
      <P>This is the home screen.</P>
      <P>{hello} {world}</P>
    </Section>
  )
}

export default Home
