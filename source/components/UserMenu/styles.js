export default (props, traits) => {
  const {
    rhythm,
    mediaQuery
  } = traits

  return {
    links: {
      textAlign: 'center',
      [mediaQuery('md')]: {
        display: 'flex',
        alignItems: 'flex-start',
        lineHeight: rhythm(1.5)
      }
    },

    button: {
      display: 'block',
      width: '100%',
      height: rhythm(1.5),
      lineHeight: rhythm(1.5),
      padding: `0 ${rhythm(0.5)}`,
      marginBottom: rhythm(0.25),
      [mediaQuery('md')]: {
        width: 'auto',
        marginLeft: rhythm(0.75),
        padding: `0 ${rhythm(1)}`
      }
    }
  }
}
