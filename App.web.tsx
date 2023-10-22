import RootNavigator from '@navigators/RootNavigator'
import React from 'react'
import { NativeBaseProvider, Box } from 'native-base'
import { Provider } from 'react-redux'
import { store } from './src/store/store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RNAsyncStorageFlipper from 'rn-async-storage-flipper'

function App(): JSX.Element {
    RNAsyncStorageFlipper(AsyncStorage)
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <RootNavigator />
            </NativeBaseProvider>
        </Provider>
    )
}

export default App
