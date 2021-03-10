import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import renderHeader from './Header'

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1
  }

})

const Home = () => {
  return (
        <View style = {styles.container}>
          {renderHeader()}
            <Text>Welcome Home!</Text>
        </View>
  )
}

export default Home
