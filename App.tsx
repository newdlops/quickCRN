import RootNavigator from '@navigators/RootNavigator'
import React from 'react'
import { NativeBaseProvider } from 'native-base'

function App(): JSX.Element{

  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  )
}

export default App
