import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import screens
import HomeScreen from '@screens/HomeScreen/HomeScreen'
import ChatBotScreen from '@screens/ChatBotScreen/ChatBotScreen'
import ProjectStatusList from '@screens/ProjectStatus/ProjectStatusList'
import MainTabBar from './MainTabBar/MainTabBar'
import SearchHeader from './MainTabHeader/MainTabHeader'

import ProjectStatusHeader from '@navigators/MainTabHeader/ProjectStatusHeader'

const Tab = createBottomTabNavigator()

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={MainTabBar}
      initialRouteName="Home"
      screenOptions={{ header: SearchHeader }}
      backBehavior="initialRoute"
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
        name="ProjectStatusList"
        component={ProjectStatusList}
        options={{
          title: '인증진행',
          tabBarLabel: 'chart-timeline',
          header: ProjectStatusHeader,
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
