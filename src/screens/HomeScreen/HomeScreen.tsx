import {
  Center,
  Box,
  Pressable,
  HStack,
  Icon,
  VStack,
  ScrollView,
  Text,
} from 'native-base'
import React, { useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import QCLogo from '../../assets/svg/QCLogo'
import { CommonActions } from '@react-navigation/native'
import { useGetRecentNoticeQuery } from '../../service/notice'

function HomeScreen({ navigation }): React.JSX.Element {
  useEffect(() => {
    navigation.dispatch(state => {
      return CommonActions.reset({
        ...state,
        routes: state.routes,
        index: state.routes.length - 3,
        history: [state.routes[1]],
      })
    })
  }, [])

  const { data: notice } = useGetRecentNoticeQuery('')
  console.log('공지사항')
  console.log(notice)
  const gotoSearch = () => {
    navigation.navigate('SearchProductList')
  }
  const rankDownIcon = () => (
    <Icon as={Ionicons} name='caret-down-sharp' size={'7'} color='blue.500' />
  )
  const rankUpIcon = () => (
    <Icon as={Ionicons} name='caret-up-sharp' size={'7'} color='red.500' />
  )
  return (
    <ScrollView>
      <VStack flex={1}>
        <Box height='56' bg='blue.400' pl={6}>
          <HStack alignItems={'center'} mt={6}>
            <Box size={'12'} mr='2'>
              <QCLogo />
            </Box>
            <Box
              _text={{ fontSize: '36', fontWeight: 'black', color: 'white' }}
            >
              QuickC
            </Box>
          </HStack>
          <Box
            _text={{ fontSize: '20', fontWeight: 'semibold', color: 'white' }}
            mt={9}
          >
            어떤 제품이 궁금하신가요?
          </Box>
          <Box
            _text={{ fontSize: '16', fontWeight: 'semibold', color: 'white' }}
          >
            자세한 검색어을 입력하고 정보를 확인하세요
          </Box>
        </Box>
        <VStack alignItems={'center'}>
          <Pressable _pressed={{ bg: 'red.100' }} onPress={gotoSearch}>
            <HStack
              width={'80'}
              height={'12'}
              alignItems={'center'}
              borderWidth={'3'}
              borderRadius={'24'}
              borderColor={'blue.900'}
              mt={-6}
              bg={'white'}
            >
              <Icon
                as={FontAwesome}
                name="search"
                color="black"
                alignContent={'center'}
                justifyContent={'space-between'}
                size={7}
                ml={'3'}
              />
              <Box ml={'2'} _text={{ fontSize: '18' }}>
                검색할 제품을 입력하세요
              </Box>
            </HStack>
          </Pressable>
        </VStack>
        {/*<Center height={64} alignItems={'center'} mt={2}>*/}
        {/*  <Box*/}
        {/*    width={80}*/}
        {/*    height={56}*/}
        {/*    bg={'white'}*/}
        {/*    borderRadius={16}*/}
        {/*    shadow={1}*/}
        {/*    pt={3}*/}
        {/*    pl={5}*/}
        {/*  >*/}
        {/*    <Text fontSize={16} mb={2}>*/}
        {/*      검색어 순위*/}
        {/*    </Text>*/}
        {/*    <HStack>*/}
        {/*      <VStack>*/}
        {/*        <HStack>*/}
        {/*          {rankUpIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*        <HStack>*/}
        {/*          {rankDownIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*        <HStack>*/}
        {/*          {rankUpIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*        <HStack>*/}
        {/*          {rankDownIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*        <HStack>*/}
        {/*          {rankUpIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*        <HStack>*/}
        {/*          {rankDownIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*      </VStack>*/}
        {/*      <Box w={10} />*/}
        {/*      <VStack>*/}
        {/*        <HStack>*/}
        {/*          {rankUpIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*        <HStack>*/}
        {/*          {rankDownIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*        <HStack>*/}
        {/*          {rankUpIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*        <HStack>*/}
        {/*          {rankDownIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*        <HStack>*/}
        {/*          {rankUpIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*        <HStack>*/}
        {/*          {rankDownIcon()}*/}
        {/*          <Text ml={2} mr={2}>*/}
        {/*            1*/}
        {/*          </Text>*/}
        {/*          <Text>인공위성</Text>*/}
        {/*        </HStack>*/}
        {/*      </VStack>*/}
        {/*    </HStack>*/}
        {/*  </Box>*/}
        {/*</Center>*/}
        <Center alignItems={'center'} mt={4}>
          <Box
            width={80}
            bg={'white'}
            borderRadius={16}
            shadow={1}
            pt={3}
            pl={5}
            pr={5}
            pb={3}
          >
            <Text fontSize={16} fontWeight={'bold'} mb={2}>
              {notice?.msg.title}
            </Text>
            <Text fontSize={16} fontWeight={'bold'} mb={2}>
              {notice?.msg.content}
            </Text>
          </Box>
        </Center>
        {/*<Center height={64} alignItems={'center'} mt={2}>*/}
        {/*  <Box*/}
        {/*    width={80}*/}
        {/*    height={56}*/}
        {/*    bg={'white'}*/}
        {/*    borderRadius={16}*/}
        {/*    shadow={1}*/}
        {/*  />*/}
        {/*</Center>*/}
      </VStack>
    </ScrollView>
  )
}

export default HomeScreen
