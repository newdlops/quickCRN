import { Button, Box, Pressable, VStack, HStack, ScrollView } from 'native-base'
import React, { useState } from 'react'
import { useLazyLogoutQuery } from '../../service/user'
import { useSelector } from 'react-redux'

function MyPageScreen({ navigation }): JSX.Element {
  const [scroll, setScroll] = useState(true)
  const user = useSelector(state => state.user.user)
  const [logout] = useLazyLogoutQuery()
  const userLogout = () => {
    logout(user.accessToken)
      .then(
        navigation.getParent().reset({
          index: 0,
          routes: [{ name: 'Login' }],
        }),
      )
      .catch(e => console.log('Logout Error', e))
  }
  const gotoInquiryScreen = () => {
    navigation.navigate('MyInquiry')
  }

  return (
    <ScrollView
      nestedScrollEnabled={true}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
    >
      <VStack>
        <Box
          _text={{ fontSize: 16 }}
          bgColor='white'
          h='48'
          mb={3}
          p={5}
          pl={2}
        >
          <HStack mt={6} alignItems='center'>
            {/*<Circle size={16} bgColor={'red.200'}></Circle>*/}
            <VStack ml={10}>
              <Box _text={{ fontSize: 18 }} mb={2}>
                {user.username}
              </Box>
              <Box _text={{ fontSize: 14 }}>{user.email}</Box>
            </VStack>
          </HStack>
          <Button
            mt={4}
            ml={8}
            variant='outline'
            _text={{ fontSize: 16, color: 'black' }}
            borderRadius={5}
            w={56}
            onPress={() => navigation.push('EditUserInfo')}
          >
            개인정보 변경
          </Button>
        </Box>
        <VStack _text={{ fontSize: 16 }} bgColor='white' mb={3} p={5} pl={9}>
          <Box mb={4} _text={{ fontSize: 16 }}>
            내 활동
          </Box>
          <Pressable onPress={() => alert()}>
            <Box mb={4} ml={4} _text={{ fontSize: 16 }}>
              즐겨찾기
            </Box>
          </Pressable>
          {/*<Pressable onPress={gotoInquiryScreen}>*/}
          {/*  <Box mb={4} ml={4} _text={{ fontSize: 16 }}>*/}
          {/*    내 문의내역*/}
          {/*  </Box>*/}
          {/*</Pressable>*/}
          <Pressable onPress={() => alert()}>
            <Box mb={4} ml={4} _text={{ fontSize: 16 }}>
              오류 정보 신고내역
            </Box>
          </Pressable>
          <Pressable onPress={() => alert()}>
            <Box mb={4} ml={4} _text={{ fontSize: 16 }}>
              제품 추가 요청내역
            </Box>
          </Pressable>
        </VStack>
        <VStack
          _text={{ fontSize: 16 }}
          bgColor='white'
          // h='48'
          mb={3}
          p={5}
          pl={9}
        >
          <Box mb={4} _text={{ fontSize: 16 }}>
            고객센터
          </Box>
          <Pressable onPress={() => alert()}>
            <Box mb={4} ml={4} _text={{ fontSize: 16 }}>
              공지사항
            </Box>
          </Pressable>
          <Pressable onPress={() => alert()}>
            <Box mb={4} ml={4} _text={{ fontSize: 16 }}>
              자주하는 질문
            </Box>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.push('PersonalInformationPolicy')
              setScroll(false)
            }}
          >
            <Box mb={4} ml={4} _text={{ fontSize: 16 }}>
              개인정보 취급방침
            </Box>
          </Pressable>
          <Pressable onPress={() => navigation.push('ServiceAgreement')}>
            <Box mb={4} ml={4} _text={{ fontSize: 16 }}>
              서비스 이용 약관
            </Box>
          </Pressable>
        </VStack>
        <HStack
          alignItems='center'
          bgColor='white'
          h='80px'
          mb={3}
          p={5}
          pl={9}
        >
          <Pressable onPress={userLogout}>
            <Box _text={{ fontSize: 16 }}>로그아웃</Box>
          </Pressable>
        </HStack>
        <HStack
          justifyContent={'space-between'}
          _text={{ fontSize: 16 }}
          h='16'
          mb={3}
          pr={9}
          pl={9}
          pt={3}
        >
          <Box _text={{ fontSize: 16 }}>버전 정보</Box>
          <Box _text={{ fontSize: 16 }}>Ver 0.1</Box>
        </HStack>
      </VStack>
    </ScrollView>
  )
}

export default MyPageScreen
