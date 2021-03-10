import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

const Tab = ({ tab, onPress, icon }) => {
  return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AntDesign name="home" size={24} color="black" />
            <Text>{tab.name}</Text>
        </TouchableOpacity>
  )
}

export default Tab
