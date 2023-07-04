import {
  Center,
  HStack,
  Pressable,
  PresenceTransition,
  InputLeftAddon,
  Input,
  IconButton,
  Text,
} from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function RootHeader({ navigation, route, options }) {
  const gotoSearch = () => {
    navigation.navigate('SearchProductList')
  }
  const goBack = () => {
    navigation.goBack()
  }
  const excuteSearch = () => {
    alert('excuteSearch')
  }
  return (
    <HStack bg="green.300" alignItems="center">
      <Pressable bg="red.200" flex={1 / 9} onPress={goBack}>
        <Center size="10" bg="yellow.100">
          <Icon name="angle-left" size={30} />
        </Center>
      </Pressable>
      {/* <Center flex={1} _text={{ fontSize: 10 }}>{options.title}</Center> */}
      <Input
        flex={1}
        w="80%"
        size="md"
        placeholder="검색할 내용을 입력하세요"
        _focus={{
          borderColor: 'amber.300',
          borderWidth: 0,
        }}
        InputRightElement={
          <Pressable
            size="10"
            bg="primary.100"
            onPress={excuteSearch}
            justifyContent="center"
            alignItems="center"
          >
            <Icon name="search" size={20} />
          </Pressable>
        }
      />
    </HStack>
  )
}
