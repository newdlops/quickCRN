import React, { useEffect, useState } from 'react'
import { Box, Pressable } from 'native-base'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { useFlipper } from '@react-navigation/devtools'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import screens
import LoginScreen from '@screens/LoginScreen/LoginScreen'
import SearchProductScreen from '@screens/SearchProductScreen/SearchProductScreen'
import SearchProductListScreen from '@screens/SearchProductScreen/SearchProductListScreen'
import SearchProductDetailScreen from '@screens/SearchProductScreen/SearchProductDetailScreen'

//header
import SearchProductDetailHeader from '@navigators/MainTabHeader/ProjectStatusHeader'

//bottom tab
import MainTabNavigator from './MainTabNavigator'

//RootHeader
import SearchHeader from './RootHeader/SearchHeader'

//TypeChecking
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import ProjectStatusDetail from '@screens/ProjectStatus/ProjectStatusDetail'
import ProjectStatusHeader from '@navigators/MainTabHeader/ProjectStatusHeader'
import SignupScreen from '@screens/SignupScreen/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLazyUserTokenLoginQuery } from '../service/user'
import { useDispatch } from 'react-redux'
import { setUser } from '@store/reducers/userSlice'
import PersonalInformationPolicyScreen from '@screens/MyPageScreen/PersonalInformationPolicyScreen'
import ServiceAgreementScreen from '@screens/MyPageScreen/ServiceAgreementScreen'
import EditUserInfoScreen from '@screens/MyPageScreen/EditUserInfoScreen'
import { Keyboard } from 'react-native'

export interface RootStackParamList {
  [index: string]: object | undefined
  Login: undefined
  Root: undefined
  SearchProduct: undefined
  SearchProductList: undefined
  SearchProductDetail: undefined
  ProjectStatusDetail: undefined
}

export type RootStackScreenProp = NativeStackScreenProps<RootStackParamList>

const RootStack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator(): JSX.Element {
  const navigationRef = useNavigationContainerRef()
  const dispatch = useDispatch()
  const [tokenLoading, setTokenLoading] = useState(true)
  useFlipper(navigationRef)
  const [tokenLogin] = useLazyUserTokenLoginQuery()
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(token => {
        console.log('saved token', token)
        tokenLogin(token)
          .then(r => {
            console.log('token login result', r)
            if (r.data?.msg) {
              dispatch(setUser(r.data?.msg))
              setAuth(true)
            }
            setTokenLoading(false)
          })
          .catch(e => console.log('tokenlogin error', e))
      })
      .catch(_ => null)
  }, [])
  //TODO: 자동로그인 활성/비활성 버튼
  return (
    <Pressable flex={1} onPress={Keyboard.dismiss}>
      <Box flex={1} safeArea>
        {tokenLoading ? null : (
          <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator
              initialRouteName={auth ? 'Root' : 'Login'}
              screenOptions={{ header: SearchHeader }}
            >
              <RootStack.Screen
                name='Login'
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <RootStack.Screen
                name='Signup'
                component={SignupScreen}
                options={{ headerShown: false }}
              />
              <RootStack.Screen
                name='Root'
                component={MainTabNavigator}
                options={{ headerShown: false }}
              />
              {/* <RootStack.Screen name="ChatBot" component={ChatBotScreen} /> */}
              <RootStack.Screen
                name='SearchProduct'
                component={SearchProductScreen}
              />
              <RootStack.Screen
                name='SearchProductList'
                component={SearchProductListScreen}
              />
              <RootStack.Screen
                name='SearchProductDetail'
                component={SearchProductDetailScreen}
                options={{ header: SearchProductDetailHeader }}
              />
              <RootStack.Screen
                name='ProjectStatusDetail'
                component={ProjectStatusDetail}
                options={{
                  title: '인증진행 상세',
                  header: ProjectStatusHeader,
                }}
              />
              <RootStack.Screen
                name='PersonalInformationPolicy'
                component={PersonalInformationPolicyScreen}
                options={{
                  header: ProjectStatusHeader,
                  title: '개인정보 취급 방침',
                }}
              />
              <RootStack.Screen
                name='ServiceAgreement'
                component={ServiceAgreementScreen}
                options={{
                  header: ProjectStatusHeader,
                  title: '서비스 이용 약관',
                }}
              />
              <RootStack.Screen
                name='EditUserInfo'
                component={EditUserInfoScreen}
                options={{
                  header: ProjectStatusHeader,
                  title: '개인정보 변경',
                }}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        )}
      </Box>
    </Pressable>
  )
}

export default RootNavigator
