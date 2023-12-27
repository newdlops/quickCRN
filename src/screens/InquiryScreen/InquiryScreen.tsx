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
import { useCreateInquiryMutation } from '../../service/inquiry'
import { useSelector } from 'react-redux'
import { ToastAlert } from '@components/ToastAlert'
import {launchImageLibrary} from 'react-native-image-picker'
import { Platform } from 'react-native'

function InquiryScreen(): React.JSX.Element {
  const loginUserInfo = useSelector(state => state.user.user)
  const emptyForm = {
    productName: '',
    content: '',
    user: loginUserInfo._id,
    photos: [],
  }
  const [form, setForm] = useState(emptyForm)
  const [submit, setSubmit] = useState(false)
  const [createInquiry, result] = useCreateInquiryMutation()
  const toast = useToast()
  const handleForm = (key: string) => (e: string) => {
    setForm({ ...form, [key]: e })
  }

  const submitFormClick = () => {
    if(!submit)submitForm()
  }
  const submitForm = async () => {
    if(form.productName.length < 1) {
      toast.show({
        render: ({ id }) => (
          <ToastAlert
            id={id}
            title={'문의하실 제품명을 입력하세요'}
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
            title={'문의 내용이 없습니다.'}
            variant={'subtle'}
            description={'문의하실 내용을 입력해주세요'}
            isClosable
            toast={toast}
          />
        ),
      })
    } else {
      const inquiry = { ...form }
      try {
        await createInquiry(inquiry)
        setForm(emptyForm)
        toast.show({
          render: ({ id }) => (
            <ToastAlert
              id={id}
              title={'문의 완료'}
              variant={'subtle'}
              description={'문의 등록이 완료되었습니다.'}
              isClosable
              toast={toast}
            />
          ),
        })
        setSubmit(false)
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

  const attachImage = () => {
    launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 3,
    }, ({ assets: files }) => {
      setForm({...form, photos: files})
      console.log('camera response', files)
    })
  }
  return (
    <ScrollView>
      <VStack flex={1} alignItems={'center'} bg='white'>
        <VStack w='80%' space={3} mt='5'>
          <FormControl isRequired>
            <FormControl.Label>제품명</FormControl.Label>
            <Input
              placeholder='문의하실 제품명을 입력해주세요'
              value={form.productName}
              onChangeText={handleForm('productName')}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>제조사</FormControl.Label>
            <Input
              placeholder='제품의 제조사를 입력해주세요'
              value={form.manufactureName}
              onChangeText={handleForm('manufactureName')}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>문의내용</FormControl.Label>
            <TextArea
              placeholder='문의내용을 입력해주세요'
              value={form.content}
              onChangeText={handleForm('content')}
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>연락처</FormControl.Label>
            <Input
              placeholder='연락받으실 연락처를 입력하세요'
              value={form.contact}
              onChangeText={handleForm('contact')}
            />
          </FormControl>

          <Button
            mt='16'
            _text={{ fontWeight: 'bold', fontSize: 16 }}
            bgColor='blue.500'
            onPress={submitFormClick}
          >
            문의
          </Button>
          {/*<Button*/}
          {/*  mt='1'*/}
          {/*  _text={{ fontWeight: 'bold', fontSize: 16, color: '#000000' }}*/}
          {/*  variant='outline'*/}
          {/*  onPress={cancel}*/}
          {/*>*/}
          {/*  취소*/}
          {/*</Button>*/}
          <Button
            mt='1'
            _text={{ fontWeight: 'bold', fontSize: 16 }}
            bgColor='purple.300'
            onPress={attachImage}
          >
            사진첨부
          </Button>
          <Box h={'100px'}></Box>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export default InquiryScreen
