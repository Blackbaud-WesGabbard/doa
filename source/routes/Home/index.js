import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { fetchHome } from '../../store/home'

import AboutUs from '../../components/AboutUs'
import Hero from '../../components/Hero'
import RichText from 'constructicon/rich-text'
import { PrismicRichText } from 'prismic-utils'

const Root = ({
  home = {}
}) => (
  <div>
    <Hero banner={home.banner} heading={home.heading} />
    {home.content && (
      <RichText>
        <PrismicRichText>{home.content}</PrismicRichText>
      </RichText>
      )}
    <AboutUs {...home} />
    {/* or you could pass the props individually instead of spread
      <AboutUs people={home.people} about={home.about} />
    */}
  </div>
)

/* This is based off what is set in the store */
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
)(Root)
