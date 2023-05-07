import React from 'react'

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { useFlipper } from '@react-navigation/devtools'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import screens
import LoginScreen from '@screens/LoginScreen/LoginScreen'
import ChatBotScreen from '@screens/ChatBotScreen/ChatBotScreen'
import SearchProductScreen from '@screens/SearchProductScreen/SearchProductScreen'
import SearchProductListScreen from '@screens/SearchProductScreen/SearchProductListScreen'
import SearchProductDetailScreen from '@screens/SearchProductScreen/SearchProductDetailScreen'

//bottom tab
import MainTabNavigator from './MainTabNavigator'

const RootStack = createNativeStackNavigator()

function RootNavigator(): JSX.Element{
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen name="Root" component={MainTabNavigator}></RootStack.Screen>
        <RootStack.Screen name="Login" component={LoginScreen}></RootStack.Screen>
        <RootStack.Screen name="ChatBot" component={ChatBotScreen}></RootStack.Screen>
        <RootStack.Screen name="SearchProduct" component={SearchProductScreen}></RootStack.Screen>
        <RootStack.Screen name="SearchProductList" component={SearchProductListScreen}></RootStack.Screen>
        <RootStack.Screen name="SearchProductDetail" component={SearchProductDetailScreen}></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
