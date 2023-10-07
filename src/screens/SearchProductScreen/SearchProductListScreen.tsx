import {
  Center,
  Box,
  FlatList,
  Pressable,
  HStack,
  VStack,
  Icon,
  Text,
} from 'native-base'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useFindProductQuery } from '../../service/product'
import { RootStackScreenProp } from '@navigators/RootNavigator'
import { useSelector } from 'react-redux'
import { ProductDetails } from '../../type'

function SearchProductListScreen({
  navigation,
}: RootStackScreenProp): JSX.Element {
  const keyword: string = useSelector(state => state.search.productSearchKeyword)
  const { data, error } = useFindProductQuery(keyword)
  const list = data?.msg ?? []
  const moveToDetail = (item) => {
    navigation.navigate('SearchProductDetail', { data: item })
  }
  const render = ({ item: data }) => (
    <SearchProductItem data={data} moveToDetail={() => moveToDetail(data)} />
  )
  return (
    <Center flex={1}>
      {/* <Box>SearchProductListScreen</Box> */}
      <FlatList w="100%" data={list} renderItem={render} />
    </Center>
  )
}

function SearchProductItem({ data, moveToDetail }) {
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
                <Box _text={{ fontSize: 20, fontWeight: 'bold' }}>
                  {data?.productname}
                </Box>
                <Box
                  ml={3}
                  _text={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'gray.400',
                  }}
                >
                  {data?.keyword}
                </Box>
              </HStack>
              <Center
                position="absolute"
                right={0}
                borderRadius={'lg'}
                bg={data?.substitution ? 'blue.400' : 'blueGray.200'}
                width={'24'}
                height={'8'}
                _text={{ color: 'white', fontWeight: 'bold' }}
              >
                { data?.substitution ? '구매대행가능' : '구매대행불가' }
              </Center>
            </HStack>
            <VStack>
              <HStack alignItems={'center'}>
                <Icon as={Entypo} name="triangle-right" size="4" mr={2} />
                <Text>{data?.certificationCategory}</Text>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </Center>
    </Pressable>
  )
}

export default SearchProductListScreen
