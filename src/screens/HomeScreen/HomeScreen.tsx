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
  VStack,
  Image,
  AspectRatio,
  ScrollView,
} from 'native-base'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import QCLogo from '../../assets/svg/QCLogo'

function HomeScreen({ navigation }): JSX.Element {
  const gotoSearch = () => {
    navigation.navigate('SearchProductList')
  }
  return (
    <ScrollView>
      <VStack flex={1}>
        <Box height="56" bg="blue.400" pl={6}>
          <HStack alignItems={'center'} mt={6}>
            <Box size={'12'} mr="2">
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
                as={Ionicons}
                name="search"
                size={'7'}
                color="black"
                ml={'3'}
              />
              <Box ml={'2'} _text={{ fontSize: '18' }}>
                검색할 제품을 입력하세요
              </Box>
            </HStack>
          </Pressable>
        </VStack>
        <Center height={64} alignItems={'center'} mt={2}>
          <Box
            width={80}
            height={56}
            bg={'white'}
            borderRadius={16}
            shadow={1}
          />
        </Center>
        <Center height={64} alignItems={'center'} mt={2}>
          <Box
            width={80}
            height={56}
            bg={'white'}
            borderRadius={16}
            shadow={1}
          />
        </Center>
        <Center height={64} alignItems={'center'} mt={2}>
          <Box
            width={80}
            height={56}
            bg={'white'}
            borderRadius={16}
            shadow={1}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}

export default HomeScreen
