import {
  Center,
  HStack,
  Pressable,
  PresenceTransition,
  InputLeftAddon,
  Input,
  IconButton,
  Text,
  Spacer,
} from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function MainTabHeader({ navigation, route, options }) {
  const gotoSearch = () => {
    navigation.navigate('SearchProductList')
  }
  return (
    <HStack bg="green.300" alignItems="center">
      <Center flex={1 / 9} h={20} bg="yellow.100">
        로고
      </Center>
      <Center _text={{ fontSize: 10 }}>{options.title}</Center>
      <Pressable flex={1} onPress={gotoSearch}>
        <HStack bg="red.200" h={20} alignItems="center">
          <Icon name="search" size={20} />
          <Text>검색할 내용을 입력하세요</Text>
        </HStack>
      </Pressable>
      <IconButton
        onPress={() => alert('d')}
        flex={1/10}
        icon={<Icon name="user" size={20} color="black" />}
      />
    </HStack>
  )
}
