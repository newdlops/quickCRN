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
  FlatList,
} from 'native-base'
import React from 'react'

function SearchProductListScreen(): JSX.Element {
  const data = Array.from({ length: 30 }, (v, i) => i)

  const itemComponent = () => (
    <Box w="290" h="120" bgColor="green.100" my="3">
      아이템
    </Box>
  )

  return (
    <Center flex={1} bgColor="primary.50">
      {/* <Box>SearchProductListScreen</Box> */}
      <FlatList w="300" bg="red.200" data={data} renderItem={itemComponent} />
    </Center>
  )
}

export default SearchProductListScreen
