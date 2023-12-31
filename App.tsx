import RootNavigator from '@navigators/RootNavigator'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GestureHandlerRootView flex={1}>
        <NativeBaseProvider>
          <RootNavigator />
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App
