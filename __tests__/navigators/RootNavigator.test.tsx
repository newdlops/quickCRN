import React from 'react'
import 'react-native'
import { NativeBaseProvider } from 'native-base'
import RootNavigator from '@navigators/RootNavigator'
import { render } from '@testing-library/react-native'
import '@testing-library/jest-native'

describe('RootNavigator', () => {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  }

  it('첫 화면이 로그인 화면인지 테스트한다.', () => {
    const { UNSAFE_queryByProps } = render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <RootNavigator />
      </NativeBaseProvider>
    )
    const loginScreen = UNSAFE_queryByProps({ name: 'Login' })
    expect(loginScreen).toBeTruthy()
    expect(loginScreen).toBeOnTheScreen()
  })
})
