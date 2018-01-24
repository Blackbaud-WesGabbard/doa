export default (props, traits) => {
  const {
    rhythm,
    colors,
    mediaQuery
  } = traits

  const { toggled } = props

  console.log(traits)

  return {
    header: {
      backgroundColor: colors.light,
      color: colors.dark,
      height: rhythm(3)
    },

    container: {
      position: 'relative',
      padding: rhythm(1),
      backgroundColor: toggled && colors.light,
      ':after': {
        content: '""',
        display: 'table',
        clear: 'both'
      },
      [mediaQuery('lg')]: {
        padding: `${rhythm(0.5)} ${rhythm(1.5)}`
      },
      [mediaQuery('md', 'max-width')]: {
        width: '100%',
        position: toggled && 'fixed',
        top: 0,
        left: 0,
        height: rhythm(3),
        zIndex: toggled && '99'
      }
    },

    navigation: {
      [mediaQuery('md', 'max-width')]: {
        position: 'fixed',
        top: `calc(${rhythm(5)} - 2px)`,
        left: 0,
        right: 0,
        bottom: 0,
        display: toggled ? 'flex' : 'none',
        backgroundColor: 'rgba(255,255,255,.95)',
        justifyContent: 'space-between',
        flexPack: 'justify',
        padding: rhythm(0.75),
        paddingLeft: rhythm(0.333),
        paddingTop: rhythm(0.5),
        zIndex: 97
      }
    },

    menu: {
      display: 'block',
      clear: 'both',
      flexDirection: 'column',
      [mediaQuery('md')]: {
        flexDirection: 'row',
        display: 'flex'
      }
    },

    user: {
      minWidth: rhythm(6),

      [mediaQuery('md')]: {
        position: 'absolute',
        top: rhythm(0.6),
        right: rhythm(0.666)
      },

      [mediaQuery('lg')]: {
        top: 'auto',
        bottom: rhythm(0.55),
        right: rhythm(1.5)
      }
    }
  }
}
