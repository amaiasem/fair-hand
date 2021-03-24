import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { COLOR, SIZES, images, SHADOW } from '../../../constants'

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    height: 50,
    width: SIZES.width,
    backgroundColor: COLOR.white,
    ...SHADOW

  },
  logo: {
    marginTop: 3,
    width: 150,
    height: 40
  }
})

function renderHeader () {
  return (
      <View style={styles.headerBox}>
        <Image style={styles.logo} source={images.blackLogo}></Image>
      </View>
  )
}

export default renderHeader
