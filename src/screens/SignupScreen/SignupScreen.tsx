import { RootStackScreenProp } from '@navigators/RootNavigator'
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  KeyboardAvoidingView,
  useToast,
  VStack,
} from 'native-base'
import React, { useState } from 'react'
import { Platform } from 'react-native'
import { useLazyCreateUserQuery } from '../../service/user'
import { ToastAlert } from '@components/ToastAlert'

function SignupScreen({
  navigation: { navigate, goBack },
  route: { params },
}: RootStackScreenProp): React.JSX.Element {
  const [createUser, userinformation] = useLazyCreateUserQuery()
  const emptyForm = {
    username: '',
    email: params?.kakaoInfo?.email ?? '',
    phoen: '',
    password: '',
    passwordConfirm: '',
  }
  const [form, setForm] = useState(emptyForm)
  const toast = useToast()
  const backToLogin = () => {
    goBack()
  }

  const submitSignup = () => {
    createUser({ ...form })
      .then(result => {
        console.log(result)
        toast.show({
          render: ({ id }) => (
            <ToastAlert
              id={id}
              title={'계정 등록이 성공했습니다.'}
              variant={'subtle'}
              description={'다시 로그인해주세요'}
              isClosable
              toast={toast}
            />
          ),
        })
        goBack()
      })
      .catch(_ =>
        toast.show({
          render: ({ id, warn: status }) => (
            <ToastAlert
              id={id}
              title={'계정 등록이 실패했습니다.'}
              variant={'subtle'}
              description={'다시 등록해주세요'}
              isClosable
              toast={toast}
            />
          ),
        }),
      )
  }

  const handleForm = (key: string) => (e: string) => {
    setForm({ ...form, [key]: e })
  }

  return (
    <Center w='100%' bgColor={'#FFFFFF'}>
      <Box safeArea p='2' w='90%' maxW='290' py='8'>
        <Heading
          size='lg'
          color='coolGray.800'
          _dark={{
            color: 'warmGray.50',
          }}
          fontWeight='semibold'
        >
          QuickC 가입을 환영합니다!
        </Heading>
        <Heading
          mt='1'
          color='coolGray.600'
          _dark={{
            color: 'warmGray.200',
          }}
          fontWeight='medium'
          size='xs'
        >
          회원가입을 진행해주세요
        </Heading>
        <VStack space={3} mt='5'>
          <FormControl isRequired>
            <FormControl.Label>닉네임</FormControl.Label>
            <Input
              onChangeText={handleForm('username')}
              placeholder='사용하실 별명을 입력해주세요'
              value={form.username}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>이메일</FormControl.Label>
            <Input
              placeholder='이메일 주소를 입력해주세요'
              onChangeText={handleForm('email')}
              value={form.email}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>핸드폰</FormControl.Label>
            <Input
              placeholder='핸드폰 번호를 입력해주세요'
              onChangeText={handleForm('phone')}
              value={form.phone}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>비밀번호</FormControl.Label>
            <Input
              type='password'
              textContentType='newPassword'
              placeholder='비밀번호를 입력해주세요'
              onChangeText={handleForm('password')}
              value={form.password}
            />
            <FormControl.ErrorMessage>
              비밀번호를 확인해주세요
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>비밀번호 확인</FormControl.Label>
            <Input
              type='password'
              textContentType='newPassword'
              placeholder='비밀번호를 확인해주세요'
              onChangeText={handleForm('passwordConfirm')}
              value={form.passwordConfirm}
            />
          </FormControl>
          <Button
            mt='16'
            _text={{ fontWeight: 'bold', fontSize: 16 }}
            bgColor='blue.500'
            onPress={submitSignup}
          >
            회원가입
          </Button>
          <Button
            mt='1'
            _text={{ fontWeight: 'bold', fontSize: 16, color: '#000000' }}
            variant='outline'
            onPress={backToLogin}
          >
            취소
          </Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default SignupScreen
