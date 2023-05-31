import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import screens
import HomeScreen from '@screens/HomeScreen/HomeScreen'
import ChatBotScreen from '@screens/ChatBotScreen/ChatBotScreen'
import SearchProductDetailScreen from '@screens/SearchProductScreen/SearchProductDetailScreen'

const Tab = createBottomTabNavigator()

function MainTabNavigator(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatBot" component={ChatBotScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="SearchProductDetail"
        component={SearchProductDetailScreen}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
