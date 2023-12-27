import {
  Center,
  Input,
  Button,
  Box,
  KeyboardAvoidingView,
  ITextProps,
  Pressable,
  HStack,
  Icon,
  FormControl,
  VStack,
  ScrollView,
  TextArea, useToast,
} from 'native-base'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ToastAlert } from '@components/ToastAlert'
import { CameraRoll } from '@react-native-camera-roll/camera-roll'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import { Platform } from 'react-native'
import { useCreateWrongInformationMutation } from '../../service/wronginfo'

function WrongInformation({ navigation, route }): React.JSX.Element {
  const loginUserInfo = useSelector(state => state.user.user)
  const emptyForm = {
    productName: route.params.title ?? '',
    content: '',
    title:'',
    requestUser: loginUserInfo,
    product: route.params.product ?? null,
  }
  const [form, setForm] = useState(emptyForm)
  const [createWrongInformation, result] = useCreateWrongInformationMutation()
  const toast = useToast()
  const handleForm = (key: string) => (e: string) => {
    setForm({ ...form, [key]: e })
  }
  const submitForm = async () => {
    if(form.productName.length < 1) {
      toast.show({
        render: ({ id }) => (
          <ToastAlert
            id={id}
            title={'수정 요청하실 제품명을 입력하세요'}
            variant={'subtle'}
            description={'제품명을 입력하세요'}
            isClosable
            toast={toast}
          />
        ),
      })
    } else if (form.content.length < 1){
      toast.show({
        render: ({ id }) => (
          <ToastAlert
            id={id}
            title={'수정 요청 내용이 없습니다.'}
            variant={'subtle'}
            description={'수정 요청하실 내용을 입력해주세요'}
            isClosable
            toast={toast}
          />
        ),
      })
    } else {
      const wrongInfo = { ...form }
      console.log('업데이트 인포메이션')
      console.log(wrongInfo.product)
      try {
        await createWrongInformation(wrongInfo)
        setForm(emptyForm)
        toast.show({
          render: ({ id }) => (
            <ToastAlert
              id={id}
              title={'수정 요청 완료'}
              variant={'subtle'}
              description={'수정 요청 등록이 완료되었습니다.'}
              isClosable
              toast={toast}
            />
          ),
        })
      } catch(e){
        toast.show({
          render: ({ id }) => (
            <ToastAlert
              id={id}
              title={'오류가 발생했습니다.'}
              variant={'subtle'}
              status={'error'}
              description={'다시 시도해주세요'}
              isClosable
              toast={toast}
            />
          ),
        })
      }
    }
  }
  const cancel = () => {
    setForm(emptyForm)
  }

  return (
    <ScrollView>
      <VStack flex={1} alignItems={'center'} bg='white'>
        <VStack w='80%' space={3} mt='5'>
          <FormControl isRequired>
            <FormControl.Label>제품명</FormControl.Label>
            <Input
              placeholder='수정 요청하실 제품명을 입력해주세요'
              value={form.productName}
              onChangeText={handleForm('productName')}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>수정 요청내용</FormControl.Label>
            <TextArea
              placeholder='수정 요청내용을 입력해주세요'
              value={form.content}
              onChangeText={handleForm('content')}
            />
          </FormControl>
          <Button
            mt='16'
            _text={{ fontWeight: 'bold', fontSize: 16 }}
            bgColor='blue.500'
            onPress={submitForm}
          >
            수정 요청
          </Button>
          <Box h='500px'></Box>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default WrongInformation
