import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '@screens/HomeScreen/HomeScreen'

const RootStack = createNativeStackNavigator()
function RootNavigator(): JSX.Element{
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen}></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
