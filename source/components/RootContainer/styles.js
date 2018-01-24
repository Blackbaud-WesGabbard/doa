export default (props, traits) => {
  const {
    fonts,
    colors
  } = traits

  return {
    root: {
      fontSize: '1rem',
      fontFamily: fonts.body,
      color: colors.dark,
      overflowX: 'hidden',
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale'
    }
  }
}
