import React, { useEffect, useState } from 'react'
import { Box } from 'native-base'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
//TypeChecking
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import screens
import LoginScreen from '@screens/LoginScreen/LoginScreen'
import SearchProductScreen from '@screens/SearchProductScreen/SearchProductScreen'
import SearchProductListScreen from '@screens/SearchProductScreen/SearchProductListScreen'
import SearchProductDetailScreen from '@screens/SearchProductScreen/SearchProductDetailScreen'

//header
import SearchProductDetailHeader from '@navigators/MainTabHeader/ProjectStatusHeader'
import ProjectStatusHeader from '@navigators/MainTabHeader/ProjectStatusHeader'

//bottom tab
import MainTabNavigator from './MainTabNavigator'

//RootHeader
import SearchHeader from './RootHeader/SearchHeader'
import ProjectStatusDetail from '@screens/ProjectStatus/ProjectStatusDetail'
import SignupScreen from '@screens/SignupScreen/SignupScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLazyUserTokenLoginQuery } from '../service/user'
import { useDispatch } from 'react-redux'
import { setUser } from '@store/reducers/userSlice'
import PersonalInformationPolicyScreen from '@screens/MyPageScreen/PersonalInformationPolicyScreen'
import ServiceAgreementScreen from '@screens/MyPageScreen/ServiceAgreementScreen'
import EditUserInfoScreen from '@screens/MyPageScreen/EditUserInfoScreen'
import InquiryScreen from '@screens/InquiryScreen/InquiryScreen'
import NoticeList from '@screens/Notice/NoticeList'
import FaqList from '@screens/MyPageScreen/Faq'
import RequestInformation from '@screens/InquiryScreen/RequestInformation'
import WrongInformation from '@screens/InquiryScreen/WrongInformation'
import WrongInformationListScreen from '@screens/InquiryScreen/WrongInformationListScreen'
import RequestInformationListScreen from '@screens/InquiryScreen/RequestInformationListScreen'

export interface RootStackParamList {
  Login: undefined
  Root: undefined
  SearchProduct: undefined
  SearchProductList: undefined
  SearchProductDetail: undefined
  ProjectStatusDetailView: { projectId: string } | undefined
  EditUserInfo: undefined
  [index: string]: undefined | any
}

export type RootStackScreenProp = NativeStackScreenProps<RootStackParamList>

const RootStack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator(): React.JSX.Element {
  const navigationRef = useNavigationContainerRef()
  const dispatch = useDispatch()
  const [tokenLoading, setTokenLoading] = useState(true)
  const [tokenLogin] = useLazyUserTokenLoginQuery()
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(token => {
        if (token) {
          tokenLogin(token)
            .then(r => {
              if (r.data?.msg) {
                dispatch(setUser(r.data?.msg))
                setAuth(true)
              }
              setTokenLoading(false)
            })
            // eslint-disable-next-line no-console
            .catch(e => console.log('token login error', e))
        } else {
          setTokenLoading(false)
        }
      })
      // eslint-disable-next-line no-console
      .catch(_ => console.log('Error loading token', _))
  }, [])

  //TODO: 자동로그인 활성/비활성 버튼
  return (
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
              name='ProjectStatusDetailView'
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
            <RootStack.Screen
              name='MyInquiry'
              component={InquiryScreen}
              options={{
                header: ProjectStatusHeader,
                title: '내 문의내역',
              }}
            />
            <RootStack.Screen
              name='Notice'
              component={NoticeList}
              options={{
                header: ProjectStatusHeader,
                title: '공지사항',
              }}
            />
            <RootStack.Screen
              name='Faq'
              component={FaqList}
              options={{
                header: ProjectStatusHeader,
                title: '자주하는 질문',
              }}
            />
            <RootStack.Screen
              name='RequestInformation'
              component={RequestInformation}
              options={{
                header: ProjectStatusHeader,
                title: '정보 추가 요청',
              }}
            />
            <RootStack.Screen
              name='WrongInformation'
              component={WrongInformation}
              options={{
                header: ProjectStatusHeader,
                title: '잘못된 정보 신고',
              }}
            />
            <RootStack.Screen
              name='WrongInformationList'
              component={WrongInformationListScreen}
              options={{
                header: ProjectStatusHeader,
                title: '오류 정보 신고내역',
              }}
            />
            <RootStack.Screen
              name='RequestInformationList'
              component={RequestInformationListScreen}
              options={{
                header: ProjectStatusHeader,
                title: '제품 추가 요청내역',
              }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      )}
    </Box>
  )
}

export default RootNavigator
