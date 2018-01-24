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

const Home = () => {
  return (
    <h1>Hello, homepage!</h1>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Home)
