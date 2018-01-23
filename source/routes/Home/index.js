import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Helmet from 'react-helmet'
import * as traits from '../../lib/traits'
import TraitsProvider from 'constructicon/traits-provider'

import Header from '../../components/Header'

const hooks = {
  fetch: ({
    dispatch,
    state
  }) => Promise.all([])
}

const mapState = () => ({})

const Root = () => {
  return (
    <TraitsProvider traits={traits}>
      <div>
        <Header />
        <Helmet
          title={'My App'}
        />
        <h1>Hello, world!</h1>
      </div>
    </TraitsProvider>
  )
}

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Root)
