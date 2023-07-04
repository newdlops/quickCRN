import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import screens
import HomeScreen from '@screens/HomeScreen/HomeScreen'
import ChatBotScreen from '@screens/ChatBotScreen/ChatBotScreen'
import SearchProductDetailScreen from '@screens/SearchProductScreen/SearchProductDetailScreen'
import MainTabBar from './MainTabBar/MainTabBar'
import MainTabHeader from './MainTabHeader/MainTabHeader'

const Tab = createBottomTabNavigator()

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={MainTabBar}
      initialRouteName="Home"
      screenOptions={{ header: MainTabHeader }}
    >
      <Tab.Screen
        name="ChatBot"
        component={ChatBotScreen}
        options={{
          title: '인증문의',
          headerShown: false,
          tabBarLabel: 'chat-question-outline',
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '메인화면', headerShown: false, tabBarLabel: 'home' }}
      />
      <Tab.Screen
        name="SearchProductDetail"
        component={SearchProductDetailScreen}
        options={{ title: '인증진행', tabBarLabel: 'chart-timeline' }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
