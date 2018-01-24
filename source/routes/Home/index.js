import React from 'react'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { fetchHome } from '../../store/home'

import Heading from 'constructicon/heading'
import Hero from '../../components/Hero'
import RichText from 'constructicon/rich-text'
import { PrismicRichText } from 'prismic-utils'

const HomeContent = ({
  title,
  content,
  people = []
}) => {
  console.log(people)
  return (
    <div>
      <Heading tag='h2'>
        {title}
      </Heading>
      {content && (
        <RichText>
          <PrismicRichText>{content}</PrismicRichText>
        </RichText>
      )}
    </div>
  )
}

const Root = ({
  home = {}
}) => {
  const { about = {} } = home
  return (
    <div>
      <Hero banner={home.banner} heading={home.heading} />
      <HomeContent {...about} {...home} />
    </div>
  )
}

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
