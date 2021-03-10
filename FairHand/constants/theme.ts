import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const COLOR = {
  orange: '#FF7F50',
  black: '#262322',
  grey: '#5B5B5B',
  lightgrey: '#A1A1A1',
  white: '#fff',
  whiteTransparency: '#FFFFFF50'
}

export const SIZES = {

  base: 8,
  h1: 20,
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

const appTheme = { COLOR, SIZES }

export default appTheme
