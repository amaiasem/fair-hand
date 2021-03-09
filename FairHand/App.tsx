import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { AppCover, Home } from './src/screens'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'AppCover'}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='AppCover' component={AppCover}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
