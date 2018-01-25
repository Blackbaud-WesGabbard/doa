import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'

import AboutUs from '../../components/AboutUs'
import { fetchHome } from '../../store/home'

const About = ({
  home = {}
}) => (
  <AboutUs people={home.people} about={home.about} />
)

const mapStateToProps = ({ home }) => ({
  home: home.data
})

const hooks = {
  fetch: ({
    dispatch,
    state
  }) => Promise.all([
    dispatch(fetchHome())
  ])
}

export default compose(
  connect(mapStateToProps),
  provideHooks(hooks)
)(About)
