import {
  Center,
  Input,
  Button,
  Box,
  KeyboardAvoidingView,
  ITextProps,
  Pressable,
  HStack,
  Icon, VStack, ScrollView,
  Circle, Flex, Text,
} from 'native-base'
import React from 'react'

function MyPageScreen(): JSX.Element {
  return (
    <ScrollView>
      <VStack>
        <Box _text={{ fontSize: 16}} bgColor='green.300' h='48' mb={3} p={5} pl={9}>
          <HStack mt={6} alignItems='center'>
            <Circle size={16} bgColor={'red.200'}></Circle>
            <VStack ml={10}>
              <Box _text={{ fontSize: 18}} mb={2}>유저닉네임</Box>
              <Box _text={{ fontSize: 14}}>이메일</Box>
            </VStack>
          </HStack>
          <Button mt={4} ml={24} _text={{ fontSize: 16, color: 'black'}} bgColor={'blue.200'} borderRadius={5} w={56} onPress={()=>alert('개인정보 변경')}>개인정보 변경</Button>
        </Box>
        <VStack _text={{ fontSize: 16}} bgColor='green.300' h='48' mb={3} p={5} pl={9}>
          <Box mb={4} _text={{ fontSize: 16}}>내 활동</Box>
          <Box mb={4} ml={4} _text={{ fontSize: 16}}>즐겨찾기</Box>
          <Box mb={4} ml={4} _text={{ fontSize: 16}}>오류 정보 신고내역</Box>
          <Box mb={4} ml={4} _text={{ fontSize: 16}}>제품 추가 신고내역</Box>
        </VStack>
        <VStack _text={{ fontSize: 16}} bgColor='green.300' h='48' mb={3} p={5} pl={9}>
          <Box mb={4} _text={{ fontSize: 16}}>고객 센터</Box>
          <Box mb={4} ml={4} _text={{ fontSize: 16}}>공지사항</Box>
          <Box mb={4} ml={4} _text={{ fontSize: 16}}>개인정보 취급방침</Box>
          <Box mb={4} ml={4} _text={{ fontSize: 16}}>서비스 이용 약관</Box>
        </VStack>
        <HStack alignItems='center' bgColor='green.300' h='80px' mb={3} p={5} pl={9}>
          <Box _text={{ fontSize: 16}}>로그아웃</Box>
        </HStack>
        <HStack _text={{ fontSize: 16}} bgColor='green.300' h='16' mb={3} p={5} pl={9}>
          <Box _text={{ fontSize: 16}}>버전 정보</Box>
        </HStack>
      </VStack>
    </ScrollView>
  )
}

export default MyPageScreen
