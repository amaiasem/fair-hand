import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const COLOR = {
  orange: '#FF7F50',
  orangeOpacity: '#FF7F5040',
  orangeStrong: '#E05215',
  black: '#262322',
  grey: '#5B5B5B',
  lightgrey: '#A1A1A1',
  whiteGrey: '#EDEDED',
  white: '#fff',
  whiteTransparency: '#FFFFFF50'
}

export const SIZES = {

  base: 8,
  h1: 26,
  h2: 18,
  p12: 12,
  p14: 14,
  p16: 16,
  p22: 22,
  buttonText: 18,
  tagText: 12,
  cardRadius: 5,
  buttonRadius: 25,

  // app dimensions
  width,
  height

}

export const SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4
}

export const SHADOW2 = {
  shadowColor: '#000',
  borderBottomWidth: 0,
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5
}

const appTheme = { COLOR, SIZES, SHADOW, SHADOW2 }

export default appTheme
