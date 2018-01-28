export default (props, traits) => {
  const {
    colors,
    scale,
    rhythm,
    mediaQuery
  } = traits

  return {
    main: {
      minHeight: 'calc(50vh)',
      textAlign: 'center',
      backgroundColor: colors.paleGrey,
      color: colors.secondary
    },
    container: {
      position: 'relative'
    },
    heading: {
      fontSize: scale(3),
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(18),
      [mediaQuery('md')]: {
        fontSize: scale(4.5)
      }
    },
    copy: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(18),
      a: {
        color: colors.primary
      }
    }
  }
}
