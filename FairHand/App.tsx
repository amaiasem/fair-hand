import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AppCover, Login, Register, Shop, AddReview, MyReviews, MyFavourites } from './src/screens'
import TabNavigator from './src/Components/navigation/TabNavigator'
import { Provider } from 'react-redux'
import store from './src/redux/store/configureStore'
import Screen from './constants/ScreenConstants'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={Screen.AppCover}
        >
        <Stack.Screen name={Screen.AppCover} component={AppCover}/>
        <Stack.Screen name={Screen.Login} component={Login}/>
        <Stack.Screen name={Screen.Register} component={Register}/>
        <Stack.Screen name={Screen.AddReview} component={AddReview}/>
        <Stack.Screen name={Screen.MyReviews} component={MyReviews}/>
        <Stack.Screen name={Screen.MyFavourites} component={MyFavourites}/>
        <Stack.Screen name={Screen.TabNavigator} component={TabNavigator}/>
        <Stack.Screen name={Screen.Shop} component={Shop}/>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  )
}

export default App
