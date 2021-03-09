import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading } from 'expo'
import { useFonts, Montserrat_400Regular, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat'

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
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_800ExtraBold
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey there! Welcome to FAIR HAND!</Text>
      <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 30 }}>Hey there! Welcome to FAIR HAND!</Text>
      <Text style={{ fontFamily: 'Montserrat_800ExtraBold', fontSize: 30 }}>Hey there! Welcome to FAIR HAND!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
