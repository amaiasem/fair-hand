import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import renderHeader from './Header'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1
  }

})

const Shop = () => {
  return (
        <View style = {styles.container}>
          {renderHeader()}
            <Text>Welcome to Shop Detail!</Text>
        </View>
  )
}

export default Shop
