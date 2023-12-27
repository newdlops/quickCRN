import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import screens
import HomeScreen from '@screens/HomeScreen/HomeScreen'
import ProjectStatusList from '@screens/ProjectStatus/ProjectStatusList'
import MainTabBar from './MainTabBar/MainTabBar'

import ProjectStatusHeader from '@navigators/MainTabHeader/ProjectStatusHeader'
import InquiryScreen from '@screens/InquiryScreen/InquiryScreen'
import MyPageScreen from '@screens/MyPageScreen/MyPageScreen'

const Tab = createBottomTabNavigator()

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={MainTabBar}
      initialRouteName='MainTab'
      backBehavior='initialRoute'
    >
      <Tab.Screen
        name='ChatBot'
        component={InquiryScreen}
        options={{
          title: '인증문의',
          headerShown: true,
          header: ProjectStatusHeader,
          tabBarLabel: 'chat-question-outline',
        }}
      />
      <Tab.Screen
        name='MainTab'
        component={HomeScreen}
        options={{
          title: '메인화면',
          headerShown: false,
          tabBarLabel: 'home',
        }}
      />
      <Tab.Screen
        name='ProjectStatusList'
        component={ProjectStatusList}
        options={{
          title: '인증진행',
          tabBarLabel: 'chart-timeline',
          header: ProjectStatusHeader,
        }}
      />
      <Tab.Screen
        name='Mypage'
        component={MyPageScreen}
        options={{
          title: 'MY',
          tabBarLabel: 'account',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator
