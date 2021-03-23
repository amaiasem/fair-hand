import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

const Tab = ({ onPress, icon }: any) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} testID='button-tab'>
        {icon && <AntDesign name={icon} size={24} color="black" />}
    </TouchableOpacity>
  )
}

export default Tab
