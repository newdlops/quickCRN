import React from 'react'
import { Box } from 'native-base'
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

//RootHeader
import RootHeader from './RootHeader/RootHeader'

const RootStack = createNativeStackNavigator()

function RootNavigator(): JSX.Element {
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  return (
    <Box flex={1} safeArea>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator
          initialRouteName="Root"
          screenOptions={{ header: RootHeader }}
        >
          <RootStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Root"
            component={MainTabNavigator}
            options={{ headerShown: false }}
          />
          <RootStack.Screen name="ChatBot" component={ChatBotScreen} />
          <RootStack.Screen
            name="SearchProduct"
            component={SearchProductScreen}
          />
          <RootStack.Screen
            name="SearchProductList"
            component={SearchProductListScreen}
          />
          <RootStack.Screen
            name="SearchProductDetail"
            component={SearchProductDetailScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Box>
  )
}

export default RootNavigator
