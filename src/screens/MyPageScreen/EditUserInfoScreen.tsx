import { RootStackScreenProp } from '@navigators/RootNavigator'
import {
  Alert,
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  ScrollView,
  useToast,
  VStack,
} from 'native-base'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { UserResponse, useUpdateUserMutation } from '../../service/user'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@store/reducers/userSlice'

function EditUserInfoScreen({
  navigation: { navigate, goBack },
  route: { params },
}: RootStackScreenProp): React.JSX.Element {
  // @ts-ignore
  const userInfo = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const emptyForm = {
    username: userInfo.username,
    email: userInfo.email,
  }
  const [form, setForm] = useState(emptyForm)
  const toast = useToast()
  const [updateUser] = useUpdateUserMutation()
  const backToLogin = () => {
    goBack()
  }

  const submitUserEdit = () => {

    updateUser({
      _id: userInfo._id,
      ...form,
      // @ts-ignore
    }).then(updateResult => dispatch(setUser(updateResult?.data?.msg)))
  }

  const handleForm = (key: string) => (e: string) => {
    setForm({
      ...form,
      [key]: e,
    })
  }

  // const ToastAlert = ({
  //   id,
  //   status,
  //   variant,
  //   title,
  //   description,
  //   isClosable,
  //   ...rest
  // }) => (
  //   <Alert
  //     maxWidth='95%'
  //     alignSelf='center'
  //     flexDirection='row'
  //     status={status ? status : 'info'}
  //     variant={variant}
  //     {...rest}
  //   >
  //     <VStack w='100%'>
  //       <HStack alignItems='center' justifyContent='space-between'>
  //         <HStack alignItems='center'>
  //           <Alert.Icon />
  //           <Text
  //             ml='3'
  //             fontSize='md'
  //             fontWeight='medium'
  //             color={
  //               variant === 'solid'
  //                 ? 'lightText'
  //                 : variant !== 'outline'
  //                 ? 'darkText'
  //                 : null
  //             }
  //           >
  //             {title}
  //           </Text>
  //         </HStack>
  //         {isClosable ? (
  //           <IconButton
  //             variant='unstyled'
  //             icon={<CloseIcon size='3' />}
  //             _icon={{
  //               color: variant === 'solid' ? 'lightText' : 'darkText',
  //             }}
  //             onPress={() => toast.close(id)}
  //           />
  //         ) : null}
  //       </HStack>
  //       <Text
  //         px='6'
  //         color={
  //           variant === 'solid'
  //             ? 'lightText'
  //             : variant !== 'outline'
  //             ? 'darkText'
  //             : null
  //         }
  //       >
  //         {description}
  //       </Text>
  //     </VStack>
  //   </Alert>
  // )

  return (
    <ScrollView>
      <Center w='100%' bgColor={'#FFFFFF'} h={Dimensions.get('window').height}>
        <Box safeArea p='2' w='90%' maxW='290' py='8' mt={'-100%'}>
          <Heading
            size='lg'
            color='coolGray.800'
            _dark={{
              color: 'warmGray.50',
            }}
            fontWeight='semibold'
          >
            개인정보 수정
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
            수정할 개인정보를 입력하세요
          </Heading>
          <VStack space={3} mt='5'>
            <FormControl isRequired>
              <FormControl.Label>닉네임</FormControl.Label>
              <Input
                onChangeText={handleForm('username')}
                placeholder='변경하실 별명을 입력해주세요'
                value={form.username}
              />
            </FormControl>
            <FormControl isReadOnly>
              <FormControl.Label>이메일</FormControl.Label>
              <Input
                isDisabled={true}
                placeholder='이메일 주소를 입력해주세요'
                value={form.email}
              />
            </FormControl>
            {/*<FormControl isRequired>*/}
            {/*  <FormControl.Label>비밀번호</FormControl.Label>*/}
            {/*  <Input*/}
            {/*    type='password'*/}
            {/*    textContentType='newPassword'*/}
            {/*    placeholder='비밀번호를 입력해주세요'*/}
            {/*    onChangeText={handleForm('password')}*/}
            {/*    value={form.password}*/}
            {/*  />*/}
            {/*  <FormControl.ErrorMessage>*/}
            {/*    비밀번호를 확인해주세요*/}
            {/*  </FormControl.ErrorMessage>*/}
            {/*</FormControl>*/}
            {/*<FormControl isRequired>*/}
            {/*  <FormControl.Label>비밀번호 확인</FormControl.Label>*/}
            {/*  <Input*/}
            {/*    type='password'*/}
            {/*    textContentType='newPassword'*/}
            {/*    placeholder='비밀번호를 확인해주세요'*/}
            {/*    onChangeText={handleForm('passwordConfirm')}*/}
            {/*    value={form.passwordConfirm}*/}
            {/*  />*/}
            {/*</FormControl>*/}
            <Button
              mt='16'
              _text={{
                fontWeight: 'bold',
                fontSize: 16,
              }}
              bgColor='blue.500'
              onPress={submitUserEdit}
            >
              회원정보 수정
            </Button>
            {/*<Button*/}
            {/*  mt='1'*/}
            {/*  _text={{ fontWeight: 'bold', fontSize: 16, color: '#000000' }}*/}
            {/*  variant='outline'*/}
            {/*  onPress={backToLogin}*/}
            {/*>*/}
            {/*  취소*/}
            {/*</Button>*/}
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  )
}

export default EditUserInfoScreen
