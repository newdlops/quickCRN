import { Center, HStack, Pressable, Input, Icon, Box } from 'native-base'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function ProjectStatusHeader({ navigation, route, options }) {
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
    <HStack bg="white" alignItems="center" height={12}>
      <Pressable onPress={goBack}>
        <Center ml={2}>
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
      <Center width={80} _text={{ fontSize: 18 }}>
        {options.title}
      </Center>
    </HStack>
  )
}
