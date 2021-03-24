import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home/Home'
import Maps from '../../screens/Map/Map'
import User from '../../screens/User/User'
import TabBar from './TabBar'
import Screen from '../../../constants/ScreenConstants'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
    tabBar={(props) => <TabBar {...props}/>}
    initialRouteName={Screen.Home}
    >
        <Tab.Screen
          name={Screen.Home}
          component={Home}
          initialParams={{ icon: 'home' }}
          />
        <Tab.Screen
        name={Screen.Maps}
        component={Maps}
        initialParams={{ icon: 'enviromento' }}
        />
        <Tab.Screen
        name={Screen.User}
        component={User}
        initialParams={{ icon: 'user' }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator
