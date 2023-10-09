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
  TextArea,
} from 'native-base'
import React, { useState } from 'react'
import { useCreateInquiryMutation } from '../../service/inquiry';
import { useSelector } from 'react-redux';

function InquiryScreen(): JSX.Element {
  const loginUserInfo = useSelector(state => state.user.user)
  const emptyForm = {
    productName: '',
    content: '',
    user: loginUserInfo._id
  }
  const [form, setForm] = useState(emptyForm)
  const [createInquiry, result] = useCreateInquiryMutation()
  const handleForm = (key: string) => (e: string) => {
    setForm({ ...form, [key]: e })
  }
  const submitForm = async () => {
    const inquiry = { ...form }
    await createInquiry(inquiry)
    setForm(emptyForm)
  }
  const cancel = () => {
    setForm(emptyForm)
  }

  return (
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
        <FormControl>
          <FormControl.Label>문의내용</FormControl.Label>
          <TextArea
            placeholder='문의내용을 입력해주세요'
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
          문의
        </Button>
        <Button
          mt='1'
          _text={{ fontWeight: 'bold', fontSize: 16, color: '#000000' }}
          variant='outline'
          onPress={cancel}
        >
          취소
        </Button>
      </VStack>
    </VStack>
  )
}

export default InquiryScreen
