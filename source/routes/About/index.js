import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'

const hooks = {
  fetch: ({
    dispatch,
    state
  }) => Promise.all([])
}

const mapState = () => ({})

const About = () => {
  return (
    <h1>Hello, about us!</h1>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(About)
