import { Center, Box, FlatList, Pressable, HStack, VStack, Icon, Text } from 'native-base'
import React from 'react'
import { PressableProps } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

function SearchProductListScreen(): JSX.Element {
  const data = Array.from({ length: 10 }, (v, i) => i)

  return (
    <Center flex={1} >
      {/* <Box>SearchProductListScreen</Box> */}
      <FlatList w="100%" data={data} renderItem={SearchProductItem} />
    </Center>
  )
}

function SearchProductItem(props: PressableProps) {
  const moveToDetail = () => {
    alert('detail')
  }
  return (
    <Pressable onPress={moveToDetail}>
      <Center mt={2}>
        <Center alignItems={'center'}>
          <Box
            width={350}
            bg={'white'}
            borderRadius={16}
            shadow={1}
            px={5}
            py={3}
          >
            <HStack mb={3}>
              <HStack alignItems={'baseline'}>
                <Box _text={{ fontSize: 20, fontWeight: 'bold' }}>베터리</Box>
                <Box ml={3} _text={{ fontSize: 16, fontWeight: 'bold', color: 'gray.400' }}>충전지</Box>
              </HStack>
              <Center
                position="absolute"
                right={0}
                borderRadius={'lg'}
                bg={'blueGray.400'}
                width={'16'}
                height={'8'}
                _text={{ color: 'white', fontWeight: 'bold' }}
              >
                구매대행
              </Center>
            </HStack>
            <VStack>
              <HStack alignItems={'center'}>
                <Icon as={Entypo} name="triangle-right" size="4" mr={2} />
                <Text>전기 안전확인</Text>
              </HStack>
              <HStack alignItems={'center'}>
                <Icon as={Entypo} name="triangle-right" size="4" mr={2} />
                <Text>전기 안전확인</Text>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </Center>
    </Pressable>
  )
}

export default SearchProductListScreen
