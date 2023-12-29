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
  TextArea, useToast, Image,
} from 'native-base'
import React, { useState } from 'react'
import { useCreateInquiryMutation } from '../../service/inquiry'
import { useSelector } from 'react-redux'
import { ToastAlert } from '@components/ToastAlert'
import {launchImageLibrary} from 'react-native-image-picker'
import { Platform } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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
  const [createInquiry] = useCreateInquiryMutation()
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

  const removeImage = (itemNo) => {
    const photos = form.photos.filter((_, i)=>itemNo!=i)
    setForm({...form, photos: photos})
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
          <ScrollView horizontal>
            {form.photos?.map((v, i) => {
              console.log('값', v)
              return (
                <Box key={i} mr={3}>
                  <Icon
                    position={'absolute'}
                    right={1}
                    top={1}
                    zIndex={99}
                    as={FontAwesome}
                    name='close'
                    color='black'
                    alignContent={'center'}
                    justifyContent={'space-between'}
                    size={10}
                    ml={'3'}
                    onPress={() => removeImage(i)}
                  />
                  <Image
                    borderRadius={10}
                    h='200px'
                    w='200px'
                    source={{ uri: v.uri }}
                    alt={'첨부이미지'}
                  />
                </Box>
              )
            })}
          </ScrollView>
          <Button
            mt='8'
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
