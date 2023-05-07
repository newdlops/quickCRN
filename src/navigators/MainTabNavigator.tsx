import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import screens
import HomeScreen from '@screens/HomeScreen/HomeScreen'
import LoginScreen from '@screens/LoginScreen/LoginScreen'
import ChatBotScreen from '@screens/ChatBotScreen/ChatBotScreen'
import SearchProductScreen from '@screens/SearchProductScreen/SearchProductScreen'
import SearchProductListScreen from '@screens/SearchProductScreen/SearchProductListScreen'
import SearchProductDetailScreen from '@screens/SearchProductScreen/SearchProductDetailScreen'

const Tab = createBottomTabNavigator()

function MainTabNavigator(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatBot" component={ChatBotScreen}></Tab.Screen>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      {/* <Tab.Screen name="Login" component={LoginScreen}></Tab.Screen> */}
      {/* <Tab.Screen name="SearchProduct" component={SearchProductScreen}></Tab.Screen> */}
      {/* <Tab.Screen name="SearchProductList" component={SearchProductListScreen}></Tab.Screen> */}
      <Tab.Screen name="SearchProductDetail" component={SearchProductDetailScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default MainTabNavigator
