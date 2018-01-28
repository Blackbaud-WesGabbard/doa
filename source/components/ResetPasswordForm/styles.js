export default (props, traits) => {
  const {
    rhythm,
    scale,
    colors
  } = traits

  return {
    form: {
      paddingBottom: 0
    },
    footer: {
      marginTop: rhythm(1),
      color: colors.grey,
      fontSize: scale(-0.5),
      textAlign: 'center'
    },
    logo: {
      display: 'block',
      margin: `${rhythm(0.333)} auto`,
      height: rhythm(1)
    }
  }
}
