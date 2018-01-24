import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    rhythm,
    mediaQuery
  } = traits

  const { styles } = props

  const defaultStyles = {
    wrapper: {
      position: 'relative',
      display: 'block',
      maxWidth: '13.5rem'
    },

    logo: {
      display: 'block',
      img: {
        display: 'block',
        width: '100%'
      },
      [mediaQuery('md')]: {
        paddingBottom: rhythm(0.25)
      }
    }
  }

  return merge(defaultStyles, styles)
}
