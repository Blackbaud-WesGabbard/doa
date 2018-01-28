export default (props, traits) => {
  const {
    rhythm,
    scale,
    mediaQuery
  } = traits

  return {
    column: {
      [mediaQuery('md', 'max-width')]: {
        maxWidth: rhythm(16),
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    heading: {
      fontSize: scale(1.5)
    },
    form: {
      paddingBottom: 0
    },
    footer: {
      marginTop: rhythm(0.75)
    },
    errorModal: {
      padding: '0 1rem',
      paddingTop: rhythm(1),
      'p:last-child': {
        paddingBottom: 0
      }
    }
  }
}
