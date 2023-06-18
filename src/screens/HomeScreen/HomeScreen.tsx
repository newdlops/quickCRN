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
} from 'native-base'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

function HomeScreen({ navigation }): JSX.Element {
  const gotoSearch = () => {
    navigation.navigate('SearchProductList')
  }
  return (
    <Center flex={1} bg="primary.100">
      <Box>어떤 제품이 궁금하신가요?</Box>
      <Pressable _pressed={{ bg: 'red.100' }} onPress={gotoSearch}>
        <HStack>
          <Icon as={Ionicons} name="search" size={'20px'} color="black" />
          <Box>검색할 제품을 입력하세요</Box>
        </HStack>
      </Pressable>
    </Center>
  )
}

export default HomeScreen
