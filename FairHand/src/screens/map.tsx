import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import renderHeader from './Header'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1
  }
})

const Maps = () => {
  return (
        <View style = {styles.container}>
          {renderHeader()}
            <Text>Welcome to Maps!</Text>
        </View>
  )
}

export default Maps
