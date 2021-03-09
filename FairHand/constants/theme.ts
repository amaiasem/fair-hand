import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const COLORS = {
  orange: '#FF7F50',
  black: '#262322',
  grey: '#5B5B5B',
  lightgrey: '#A1A1A1',
  white: '#fff'
}

export const SIZES = {

  base: 8,
  h1: 24,
  h2: 18,
  p12: 12,
  p14: 14,
  buttonText: 18,
  tagText: 12,
  cardRadius: 5,
  buttonRadius: 25,

  // app dimensions
  width,
  height

}

export const FONTS = {
  h1: { fontFamily: 'Montserrat-SemiBold', fontSize: SIZES.h1 },
  h2: { fontFamily: 'Montserrat-SemiBold', fontSize: SIZES.h2 },
  p12: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.p12 },
  p14: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.p14 },
  cardTitle: { fontFamily: 'Montserrat-SemiBold', fontSize: SIZES.p14 },
  tagText: { fontFamily: 'Montserrat-Medium', fontSize: SIZES.tagText }
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme
