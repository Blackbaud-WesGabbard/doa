export default (props, traits) => {
  const {
    colors,
    mediaQuery,
    rhythm,
    transitions
  } = traits

  return {
    footer: {
      backgroundColor: colors.tertiary,
      color: colors.light,
      borderTop: `2px solid ${colors.primary}`,
      textAlign: 'center',
      [mediaQuery('md')]: {
        textAlign: 'left'
      },
      a: {
        cursor: 'pointer',
        color: 'inherit',
        transition: transitions.easeOut,
        ':hover': {
          color: colors.primary
        },
        ':focus': {
          color: colors.primary
        }
      }
    },

    logo: {
      wrapper: {
        [mediaQuery('md', 'max-width')]: {
          margin: 'auto'
        }
      }
    },

    container: {
      position: 'relative',
      padding: rhythm(1),
      paddingBottom: rhythm(0.5),
      ':after': {
        content: '""',
        display: 'table',
        clear: 'both'
      },
      [mediaQuery('md')]: {
        padding: `${rhythm(0.75)} ${rhythm(1.5)} ${rhythm(1)}`
      }
    },

    nav: {
      [mediaQuery('md', 'max-width')]: {
        marginTop: rhythm(0.75)
      }
    },

    link: {
      display: 'inline-block',
      lineHeight: '1.25em',
      padding: rhythm(0.25),
      marginRight: rhythm(0.25),
      [mediaQuery('md')]: {
        ':first-child': {
          paddingLeft: 0
        }
      }
    },

    social: {
      display: 'flex',
      width: rhythm(10),
      maxWidth: '100%',
      margin: `${rhythm(1)} auto`,
      justifyContent: 'space-between',
      flexPack: 'justify',
      [mediaQuery('md')]: {
        position: 'absolute',
        top: rhythm(2),
        right: rhythm(2),
        margin: 0
      }
    },

    socialLink: {
      display: 'block',
      position: 'relative',
      textAlign: 'center',
      width: rhythm(2),
      height: rhythm(2),
      border: '2px solid',
      borderRadius: '50%'
    },

    icon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    }
  }
}
