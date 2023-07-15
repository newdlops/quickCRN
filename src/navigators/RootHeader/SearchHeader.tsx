import { Center, HStack, Pressable, Input, Icon } from 'native-base'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function SearchHeader({ navigation, route, options }) {
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
    <HStack alignItems="center" justifyContent={'space-between'} bg="white">
      <Pressable flex={1 / 9} onPress={goBack}>
        <Center size="10">
          <Icon
            as={FontAwesome}
            name="angle-left"
            color="black"
            alignContent={'center'}
            justifyContent={'space-between'}
            size={8}
            pl={2}
          />
        </Center>
      </Pressable>
      <Input
        fontSize={16}
        flex={1}
        placeholder="검색할 내용을 입력하세요"
        _focus={{
          borderWidth: 0,
          bg: 'white',
        }}
        borderWidth={0}
        // InputRightElement={
        //   <Pressable
        //     size="10"
        //     onPress={excuteSearch}
        //     justifyContent="center"
        //     alignItems="center"
        //   >
        //     <Icon
        //       as={FontAwesome}
        //       name="search"
        //       color="black"
        //       alignContent={'center'}
        //       justifyContent={'space-between'}
        //       size={6}
        //     />
        //   </Pressable>
        // }
      />
      <Pressable onPress={excuteSearch}>
        <Center w={12} h={10}>
          <Icon
            as={FontAwesome}
            name="search"
            color="black"
            alignContent={'center'}
            justifyContent={'space-between'}
            size={6}
          />
        </Center>
      </Pressable>
    </HStack>
  )
}
