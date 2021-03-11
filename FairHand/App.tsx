import 'react-native-gesture-handler'
import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigation/TabNavigator'

// const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >

        <Stack.Screen name='Home' component={Tabs}/>
        <Stack.Screen name='AppCover' component={AppCover}/>
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default App
