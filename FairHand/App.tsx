import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AppCover, Login, Register, Shop } from './src/screens'
import TabNavigator from './src/navigation/TabNavigator'
import { Provider } from 'react-redux'
import store from './src/redux/store/configureStore'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Shop'}
        >
        <Stack.Screen name='AppCover' component={AppCover}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='TabNavigator' component={TabNavigator}/>
        <Stack.Screen name='Shop' component={Shop}/>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  )
}

export default App
