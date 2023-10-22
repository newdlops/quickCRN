import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App from './App'

// ADD THESE LINES BELOW
// This is done for Ionicons, just follow the pattern to add others like materialicons, etc

import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf'
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'
import Entypo from 'react-native-vector-icons/Fonts/Entypo.ttf'
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf'

const IoniconsStyles = `@font-face {
  src: url(${Ionicons});
  font-family: Ionicons;
}
@font-face {
  src: url(${MaterialCommunityIcons});
  font-family: MaterialCommunityIcons;
}
@font-face {
  src: url(${Entypo});
  font-family: Entypo;
}
@font-face {
  src: url(${FontAwesome});
  font-family: FontAwesome;
}
`

const style = document.createElement('style')
style.type = 'text/css'

if (style.styleSheet) {
  style.styleSheet.cssText = IoniconsStyles
} else {
  style.appendChild(document.createTextNode(IoniconsStyles))
}

document.head.appendChild(style)

if (module.hot) {
  module.hot.accept()
}
AppRegistry.registerComponent(appName, () => App)
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
})
