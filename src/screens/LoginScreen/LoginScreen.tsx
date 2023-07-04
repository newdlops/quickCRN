import {
  Center,
  Input,
  Button,
  Box,
  KeyboardAvoidingView,
  ITextProps,
} from 'native-base'
import React from 'react'
import { Platform } from 'react-native'

function LoginScreen({ navigation: { navigate } }): JSX.Element {
  const goToHome = () => {
    navigate('Root')
  }
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
    >
      <Center flex={1} bgColor="yellow.100">
        <Box w="80%">
          <Input h="20" placeholder="검색할 제품을 입력하세요" fontSize="20" />
          <Button mt="120" mb="3" _text={buttonStyle}>
            카카오톡 상담
          </Button>
          <Button mb="3" _text={buttonStyle}>
            유료전화 상담
          </Button>
          <Button _text={buttonStyle} onPress={goToHome}>
            홈으로
          </Button>
        </Box>
      </Center>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const buttonStyle: Partial<ITextProps> = {
  fontSize: 20,
}
