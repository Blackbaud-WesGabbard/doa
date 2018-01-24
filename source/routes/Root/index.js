import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Helmet from 'react-helmet'
import * as traits from '../../lib/traits'

import TraitsProvider from 'constructicon/traits-provider'
import Container from 'constructicon/container'
import RootContainer from '../../components/RootContainer'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Root = ({
  children,
  container = {},
  classNames,
  ...props
}) => {
  return (
    <TraitsProvider traits={traits}>
      <RootContainer>
        <Helmet
          title={'My App'}
        />
        <Container>
          <Header />
        </Container>
        <Container width={41} spacing={{ y: 2, x: 1.5 }}>
          {children}
        </Container>
        <Footer />
      </RootContainer>
    </TraitsProvider>
  )
}

const hooks = {
  fetch ({
    dispatch,
    state
  }) {
    return Promise.all([])
  }
}

const mapState = () => ({})

export default compose(
  connect(mapState),
  provideHooks(hooks)
)(Root)
