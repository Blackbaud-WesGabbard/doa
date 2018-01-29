export default (props, traits) => {
  const {
    colors,
    rhythm,
    scale,
    treatments,
    mediaQuery
  } = traits

  return {
    container: {
      marginTop: rhythm(1.5),
      marginBottom: rhythm(1.5),
      backgroundColor: colors.lightGrey,
      padding: rhythm(1)
    },
    title: {
      textAlign: 'center',
      padding: 0,
      marginBottom: rhythm(1.5),
      color: colors.primary,
      fontSize: scale(4),
      ...treatments.head
    },
    grid: {
      margin: '0 auto',
      display: 'block',
      [mediaQuery('sm')]: {
        display: 'flex',
        marginTop: rhythm(0.5),
        marginBottom: rhythm(1)
      }
    },
    column: {
      textAlign: 'center',
      marginBottom: rhythm(0.5)
    },
    metric: {
      root: {
        ...treatments.head,
        position: 'relative',
        display: 'inline-block',
        paddingLeft: rhythm(5),
        textAlign: 'left',
        [mediaQuery('sm')]: {
          paddingLeft: rhythm(6.5)
        }
      },
      label: {
        color: colors.secondary,
        textTransform: 'none',
        lineHeight: '0.8',
        fontSize: scale(2.5),
        paddingTop: rhythm(0.5),
        marginBottom: rhythm(-0.25),
        whiteSpace: 'wrap',
        [mediaQuery('sm')]: {
          fontSize: scale(3)
        }
      },
      amount: {
        fontSize: scale(5.5),
        lineHeight: '1.2',
        color: colors.primary,
        whiteSpace: 'nowrap',
        [mediaQuery('sm')]: {
          fontSize: scale(7)
        }
      }
    }
  }
}
