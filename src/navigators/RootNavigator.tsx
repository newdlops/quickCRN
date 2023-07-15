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
import SearchProductScreen from '@screens/SearchProductScreen/SearchProductScreen'
import SearchProductListScreen from '@screens/SearchProductScreen/SearchProductListScreen'
import SearchProductDetailScreen from '@screens/SearchProductScreen/SearchProductDetailScreen'

//header
import SearchProductDetailHeader from '@navigators/MainTabHeader/ProjectStatusHeader'

//bottom tab
import MainTabNavigator from './MainTabNavigator'

//RootHeader
import SearchHeader from './RootHeader/SearchHeader'

//TypeChecking
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProjectStatusDetail from '@screens/ProjectStatus/ProjectStatusDetail'
import ProjectStatusHeader from '@navigators/MainTabHeader/ProjectStatusHeader'

interface RootStackParamList {
  [index: string]: object
}

export type RootStackScreenProp = NativeStackScreenProps<RootStackParamList>

const RootStack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator(): JSX.Element {
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  return (
    <Box flex={1} safeArea>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator
          initialRouteName="Root"
          screenOptions={{ header: SearchHeader }}
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
          {/* <RootStack.Screen name="ChatBot" component={ChatBotScreen} /> */}
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
            options={{ header: SearchProductDetailHeader }}
          />
          <RootStack.Screen
            name="ProjectStatusDetail"
            component={ProjectStatusDetail}
            options={{
              title: '인증진행 상세',
              header: ProjectStatusHeader,
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Box>
  )
}

export default RootNavigator
