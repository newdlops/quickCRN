import RootNavigator from '@navigators/RootNavigator'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import store from './src/store/store'

function App(): JSX.Element{

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <RootNavigator />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App
