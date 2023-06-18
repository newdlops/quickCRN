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
  Fab,
  VStack,
} from 'native-base'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function SearchProductDetailScreen(): JSX.Element {
  return (
    <Center flex={1} bg="red.100">
      <VStack h="500" w="300" bgColor="primary.100">
        <Box>내용</Box>
        <Box>인증구분</Box>
        <Box>전기용품</Box>
        <Box>품목</Box>
      </VStack>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        label="문의하기"
        icon={<Icon as={Ionicons} name="person" color="primary.200" size="4" />}
      />
    </Center>
  )
}

export default SearchProductDetailScreen
