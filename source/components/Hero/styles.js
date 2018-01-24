export default (props, traits) => {
  const {
    bgColor,
    banner = []
  } = props

  const {
    rhythm,
    scale,
    colors,
    mediaQuery,
    breakpoints
  } = traits

  return {
    hero: {
      position: 'relative',
      marginTop: '-2px',
      marginBottom: '-2px',
      backgroundColor: colors[bgColor],
      color: colors.light
    },

    wrapper: {
      position: 'relative',
      maxWidth: breakpoints.xxl,
      margin: 'auto',
      backgroundImage: `url(${banner.url})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

      [mediaQuery('xxl')]: {
        ':before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: rhythm(8),
          backgroundImage: `linear-gradient(90deg, ${colors[bgColor]}, rgba(216,30,5,0))`
        },

        ':after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: rhythm(8),
          backgroundImage: `linear-gradient(90deg, rgba(216,30,5,0), ${colors[bgColor]})`
        }
      }
    },

    container: {
      position: 'relative',
      zIndex: 2,
      padding: rhythm(6),
      [mediaQuery('md')]: {
        paddingTop: rhythm(5),
        paddingBottom: rhythm(5)
      }
    },

    title: {
      color: 'white',
      fontSize: scale(3.5),
      marginBottom: rhythm(1.5),
      maxWidth: rhythm(20),
      backgroundColor: colors.primary,
      padding: rhythm(1),
      position: 'absolute',
      bottom: '10px',
      right: '10px',

      [mediaQuery('md')]: {
        fontSize: scale(6),
        marginBottom: rhythm(1)
      },

      h1: {
        fontSize: 'inherit',
        lineHeight: '1em',
        ':last-child': {
          paddingBottom: 0
        }
      }
    }
  }
}
