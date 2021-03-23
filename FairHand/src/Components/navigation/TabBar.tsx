import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Tab from './Tab'
import { COLOR, SHADOW } from '../../../constants'

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: COLOR.white,
    ...SHADOW
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50
  }

})

const TabBar = ({ state, navigation }: any) => {
  const [selected, setSelected] = useState('Home')
  const { routes } = state

  const handlePress = (activeTab: string, index: number) => {
    if (state.index !== index) {
      setSelected(activeTab)
      navigation.navigate(activeTab)
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {
          routes.map((route: any, index: number) => (
            <Tab
              icon={route.params.icon}
              onPress={() => handlePress(route.name, index)}
              key={route.key}/>
          ))
        }
      </View>
    </View>
  )
}

export default TabBar
