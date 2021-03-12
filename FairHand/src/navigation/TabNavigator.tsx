import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Maps from '../screens/Map'
import User from '../screens/User'
import TabBar from './TabBar'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
    tabBar={(props) => <TabBar {...props}/>}
    initialRouteName={'Home'}
    >
        <Tab.Screen
          name='Home'
          component={Home}
          initialParams={{ icon: 'home' }}
          />
        <Tab.Screen
        name='Maps'
        component={Maps}
        initialParams={{ icon: 'enviromento' }}
        />
        <Tab.Screen
        name='Shop'
        component={User}
        initialParams={{ icon: 'user' }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator
