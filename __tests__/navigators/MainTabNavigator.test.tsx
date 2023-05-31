// MyTabs.test.tsx
import React from 'react'
import 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import MainTabNavigator from '@navigators/MainTabNavigator'
import { render, fireEvent } from '@testing-library/react-native'

describe('MainTabNavigator', () => {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  }

  it('하단 탭바에 탭들 출력 테스트', () => {
    const { UNSAFE_queryByProps } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    )
    const chatbotScreen = UNSAFE_queryByProps({ label: 'ChatBot' })
    const homeScreen = UNSAFE_queryByProps({ label: 'Home' })
    const searchProductDetailScreen = UNSAFE_queryByProps({
      label: 'SearchProductDetail',
    })
    expect(chatbotScreen).toBeTruthy()
    expect(chatbotScreen?.props.focused).toBeTruthy()
    expect(homeScreen).toBeTruthy()
    expect(homeScreen?.props.focused).toBeFalsy()
    expect(searchProductDetailScreen).toBeTruthy()
    expect(searchProductDetailScreen?.props.focused).toBeFalsy()
  })

  it('하단 탭바 화면이동 테스트', () => {
    const { UNSAFE_queryByProps } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    )
    const chatbotScreen = UNSAFE_queryByProps({ label: 'ChatBot' })
    const homeScreen = UNSAFE_queryByProps({ label: 'Home' })
    const searchProductDetailScreen = UNSAFE_queryByProps({
      label: 'SearchProductDetail',
    })

    homeScreen && fireEvent.press(homeScreen)
    expect(homeScreen?.props.focused).toBeTruthy()
    searchProductDetailScreen && fireEvent.press(searchProductDetailScreen)
    expect(searchProductDetailScreen?.props.focused).toBeTruthy()
    chatbotScreen && fireEvent.press(chatbotScreen)
    expect(chatbotScreen?.props.focused).toBeTruthy()
  })
})
