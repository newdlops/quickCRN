import { Center, HStack, Pressable, IconButton, Text } from 'native-base'
import React from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import QCLogo from '../../assets/svg/QCLogo'

export default function MainTabHeader({ navigation, route, options }) {
  const gotoSearch = () => {
    navigation.navigate('SearchProductList')
  }

  const gotoMyProfile = () => {
    alert('gotoMyProfile')
  }

  return (
    <HStack bg='green.300' alignItems='center'>
      <Center flex={2 / 9} h={20} bg='yellow.100'>
        <QCLogo />
      </Center>
      <Center _text={{ fontSize: 10 }}>{options.title}</Center>
      <Pressable flex={1} onPress={gotoSearch}>
        <HStack bg='red.200' h={20} alignItems='center'>
          <FontAwesomeIcon name='search' size={20} />
          <Text>검색할 내용을 입력하세요</Text>
        </HStack>
      </Pressable>
      <IconButton
        onPress={gotoMyProfile}
        flex={2 / 10}
        icon={<Ionicons name='person-circle-outline' size={30} color='black' />}
      />
    </HStack>
  )
}
