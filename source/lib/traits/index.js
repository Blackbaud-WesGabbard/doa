export const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (
  `${basis * value}${unit}`
)

export const scale = (exponent = 0, scale = 1.2) => (
  `${Math.pow(scale, exponent)}rem`
)

export const transitions = {
  easeOut: 'ease-out .25s'
}

export const breakpoints = {
  xxs: '22em',
  xs: '28em',
  sm: '34em',
  md: '46em',
  lg: '62em',
  xl: '70em',
  xxl: '100em'
}

export const colors = {
  primary: '#d81e05',
  secondary: '#796e65',
  tertiary: '#796e65',
  light: '#ffffff',
  dark: '#242425',
  grey: '#796e65',
  midGrey: '#d0cac3',
  lightGrey: '#E6E3DF',
  paleGrey: '#f4f3f2',
  red: 'orangered',
  transparent: 'transparent',
  shade: 'rgba(0,0,0,0.05)',
  tint: 'rgba(255,255,255,0.25)',
  shadow: '0px 1px 4px 0px rgba(0,0,0,0.75)'
}

export const fonts = {
  head: 'acumin-pro-condensed, Helvetica Neue, Helvetica, sans-serif',
  body: 'Helvetica Neue, Helvetica, sans-serif'
}

export const treatments = {
  head: {
    fontFamily: fonts.head,
    fontWeight: 700
  },
  body: {
    fontFamily: fonts.body
  },
  button: {
    fontFamily: fonts.head,
    fontSize: scale(0.5),
    textTransform: 'uppercase'
  },
  input: {
    fontFamily: fonts.body,
    borderRadius: '0.125rem'
  },
  container: {
    maxWidth: rhythm(42)
  }
}

export const radiuses = {
  none: 0,
  small: 0.075,
  medium: 0.25,
  large: 50
}

export const container = {
  width: 50
}
