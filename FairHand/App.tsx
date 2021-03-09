import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F50',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 24
  }
})

export default function App () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey there! Welcome to FAIR HAND!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
