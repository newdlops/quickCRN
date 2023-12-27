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
import { Platform } from 'react-native'
import { useCreateRequestInformationMutation } from '../../service/requestinfo'

function RequestInformation(): React.JSX.Element {
  const loginUserInfo = useSelector(state => state.user.user)
  const emptyForm = {
    productName: '',
    content: '',
    requestUser: loginUserInfo,
    title: '',
  }
  const [form, setForm] = useState(emptyForm)
  const [createRequest, result] = useCreateRequestInformationMutation()
  const toast = useToast()
  const handleForm = (key: string) => (e: string) => {
    setForm({ ...form, [key]: e })
  }
  const submitForm = async () => {
    if(form.title.length < 1) {
      toast.show({
        render: ({ id }) => (
          <ToastAlert
            id={id}
            title={'제목을 입력하세요'}
            variant={'subtle'}
            description={'제목을 입력하세요'}
            isClosable
            toast={toast}
          />
        ),
      })
    } else if(form.productName.length < 1) {
      toast.show({
        render: ({ id }) => (
          <ToastAlert
            id={id}
            title={'정보 요청하실 제품명을 입력하세요'}
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
            title={'정보 요청 내용이 없습니다.'}
            variant={'subtle'}
            description={'정보 요청하실 내용을 입력해주세요'}
            isClosable
            toast={toast}
          />
        ),
      })
    } else {
      const requestInfo = { ...form }
      try {
        await createRequest(requestInfo)
        setForm(emptyForm)
        toast.show({
          render: ({ id }) => (
            <ToastAlert
              id={id}
              title={'정보 요청 완료'}
              variant={'subtle'}
              description={'정보 요청 등록이 완료되었습니다.'}
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
            <FormControl.Label>제목</FormControl.Label>
            <Input
              placeholder='제목을 입력하세요'
              value={form.title}
              onChangeText={handleForm('title')}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>제품명</FormControl.Label>
            <Input
              placeholder='정보 요청하실 제품명을 입력해주세요'
              value={form.productName}
              onChangeText={handleForm('productName')}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>정보 요청내용</FormControl.Label>
            <TextArea
              placeholder='정보 요청내용을 입력해주세요'
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
            정보 요청
          </Button>
          {/*<Button*/}
          {/*  mt='1'*/}
          {/*  _text={{ fontWeight: 'bold', fontSize: 16, color: '#000000' }}*/}
          {/*  variant='outline'*/}
          {/*  onPress={cancel}*/}
          {/*>*/}
          {/*  취소*/}
          {/*</Button>*/}
          <Box h={'500px'}></Box>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default RequestInformation
