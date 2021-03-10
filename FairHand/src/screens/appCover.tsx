import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { COLOR, SIZES, images } from '../../constants'

const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cover: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    right: -100,
    height: SIZES.height * 1.05
  },
  logo: {
    marginTop: 100,
    width: '80%',
    height: 208,
    resizeMode: 'cover'
  },
  buttonsBox: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%'
  },

  button: {
    width: '70%',
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.whiteTransparency,
    borderRadius: 25
  },
  buttonText: {
    color: COLOR.white,
    fontSize: SIZES.h1,
    fontWeight: '700'
  }
})

const AppCover = () => {
  return (
    <SafeAreaView style = {styles.container}>
    <Image style = {styles.cover}
      source= {images.appCover}
    ></Image>
    <Image style={styles.logo}
      source = {images.whiteLogo}
    ></Image>
    <View style={styles.buttonsBox}>
    <TouchableOpacity style={styles.button }>
      <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button }>
      <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default AppCover
