import { RootStackScreenProp } from '@navigators/RootNavigator'
import {
  Center,
  Input,
  Button,
  Box,
  KeyboardAvoidingView,
  ITextProps,
  Image,
  Pressable,
  HStack,
  useToast,
  Alert,
  VStack,
  Text,
  IconButton,
  CloseIcon,
} from 'native-base'
import React, { useState } from 'react'
import { Platform } from 'react-native'
import {
  KakaoOAuthToken,
  login as kakaoLogin,
} from '@react-native-seoul/kakao-login'
import {
  useLazyLoginQuery,
  useLazyUserKakaoLoginQuery,
} from '../../service/user'
import { LoginInfo } from '../../type'
import log from '@utils/logger'
import { useDispatch } from 'react-redux'
import { setUser } from '@store/reducers/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ToastAlert } from '@components/ToastAlert'

function LoginScreen({
  navigation: { navigate, push },
}: RootStackScreenProp): JSX.Element {
  const emptyLoginInfo = {
    email: '',
    password: '',
  }
  const LOGINERRORMASSAGES = [
    '잘못된 비밀번호를 입력하셨습니다. 올바른 비밀번호를 입력하세요',
    '계정에 등록되지 않은 이메일입니다.',
  ]
  const toast = useToast()
  const [submitted, setSubmitted] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)
  const [emailNotInput, setEmailNotInput] = useState(false)
  const [passwordNotInput, setPasswordNotInput] = useState(false)
  const [loginInfo, setLoginInfo] = useState<LoginInfo>(emptyLoginInfo)
  const [trigger] = useLazyUserKakaoLoginQuery()
  const [login] = useLazyLoginQuery()
  const dispatch = useDispatch()
  const signInWithKakao = async (): Promise<void> => {
    try {
      const _token: KakaoOAuthToken = await kakaoLogin()
      console.log('token from kakao', _token)
      const result = await trigger(_token.accessToken)
      console.log('result from server', result)
      const user = result.data?.msg.user
      const kakaoAccount = result.data?.msg.kakaoAccount
      if (user) {
        console.log('move to home', user)
        AsyncStorage.setItem('token', user.accessToken)
        dispatch(setUser(user))
        goToHome()
      } else {
        toast.show({
          render: ({ id }) => (
            <ToastAlert
              id={id}
              title={'카카오 계정으로 등록된 회원이 없습니다.'}
              variant={'subtle'}
              description={'회원가입을 진행해주세요'}
              isClosable
            />
          ),
        })
        push('Signup', { kakaoInfo: kakaoAccount })
      }
    } catch (err) {
      log.error('LOGIN ERROR : ', err)
    }
  }
  const goToHome = () => {
    navigate('Root')
  }

  const handleEmail = (e: string) => {
    setLoginInfo({ ...loginInfo, email: e })
  }

  const handlePassword = (e: string) => {
    setLoginInfo({ ...loginInfo, password: e })
  }
  const emailLogin = () => {
    setLoginFailed(false)
    let emailInput = false
    let passwordInput = false
    if (loginInfo.email == "") {
      setEmailNotInput(true)
      emailInput = false
    } else {
      setEmailNotInput(false)
      emailInput = true
    }
    if (loginInfo.password == "") {
      setPasswordNotInput(true)
      passwordInput = false
    } else {
      setPasswordNotInput(false)
      passwordInput = true
    }
    setSubmitted(true)
    if (emailInput && passwordInput) {
      emailLoginProcess().then(_ => {
        setSubmitted(false)
        setEmailNotInput(false)
        setPasswordNotInput(false)
      })
    }
  }
  const emailLoginProcess = async () => {
    try {
      const result = await login(loginInfo)
      const user = result.data.msg
      if (user) {
        dispatch(setUser(user))
        AsyncStorage.setItem('token', user.accessToken)
        goToHome()
      } else {
        setLoginFailed(true)
        setSubmitted(true)
        toast.show({
          render: ({ id }) => (
            <ToastAlert
              id={id}
              title={'입력하신 메일로 등록된 회원이 없습니다.'}
              variant={'subtle'}
              description={'회원가입을 진행해주세요'}
              isClosable
              toast={toast}
            />
          ),
        })
        log.info('NO USER')
      }
    } catch (err) {
      log.error('LOGIN ERROR : ', err)
    }
  }

  const onClickSignup = () => {
    navigate('Signup')
  }

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
    >
      <Center flex={1} bgColor={'white'}>
        <HStack alignItems={'center'} mb={10}>
          <Box
            _text={{ fontSize: '36', fontWeight: 'black', color: '#000000' }}
          >
            QuickC
          </Box>
        </HStack>
        <Box w='80%'>
          <Input
            h='50'
            placeholder='이메일 주소를 입력해주세요'
            fontSize='14'
            mb={3}
            onChangeText={handleEmail}
          />
          <Input
            h='50'
            placeholder='비밀번호를 입력해주세요'
            fontSize='14'
            mb={1}
            type={'password'}
            onChangeText={handlePassword}
          />
          {submitted && loginFailed && (
            <Box _text={{ fontSize: 12, color: 'red.400' }}>
              해당 계정정보가 없습니다.
            </Box>
          )}
          {submitted && emailNotInput && (
            <Box _text={{ fontSize: 12, color: 'red.400' }}>
              이메일을 입력해주세요
            </Box>
          )}
          {submitted && passwordNotInput && (
            <Box _text={{ fontSize: 12, color: 'red.400' }}>
              비밀번호를 입력하세요
            </Box>
          )}
          <Box mb={20} />
          <Button
            mb='3'
            borderRadius='12px'
            height={50}
            bgColor='blue.400'
            _text={loginButtonStyle}
            onPress={emailLogin}
          >
            로그인
          </Button>
          <Button
            mb='3'
            borderRadius='12px'
            height={50}
            variant='outline'
            _text={buttonStyle}
            onPress={onClickSignup}
          >
            이메일로 회원가입
          </Button>
          {/* TODO: <Box>아이디 찾기 | 비밀번호 찾기</Box>*/}
          <Pressable onPress={signInWithKakao} mt='10' mb='3'>
            <Image
              height={50}
              borderRadius='12px'
              resizeMode={'contain'}
              source={require('../../assets/img/kakao_login_large_wide.png')}
              alt='login'
            />
          </Pressable>
        </Box>
      </Center>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const loginButtonStyle: Partial<ITextProps> = {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#FFFFFF',
}

const buttonStyle: Partial<ITextProps> = {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000000D9',
}
