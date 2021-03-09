import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { COLOR, FONTS, SIZES, images } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cover: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute'
  }
})

const Home = () => {
  return (
        <View style = {styles.container}>
          <Image style = {styles.cover}
            source= {images.appCover}
          ></Image>
            <Text>Welcome Home!</Text>
        </View>
  )
}

export default Home
