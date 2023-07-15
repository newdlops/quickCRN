import {
  Center,
  Box,
  HStack,
  Icon,
  Fab,
  VStack,
  ScrollView,
  Text,
  Pressable,
} from 'native-base'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { PressableProps } from 'react-native'

function ProjectStatusList({ navigation }): JSX.Element {
  return (
    <>
      <ScrollView>
        {Array.from({ length: 2 }, (x, i) => (
          <ProductStatusDetailItem
            key={i}
            onPress={() => {
              navigation.navigate('ProjectStatusDetail')
            }}
          />
        ))}
      </ScrollView>
      <Fab
        renderInPortal={false}
        shadow={3}
        size="sm"
        bg="blue.500"
        // label="문의하기"
        icon={
          <Icon
            as={MaterialCommunityIcons}
            name="account-question"
            color="white"
            size="6"
          />
        }
      />
    </>
  )
}

function ProductStatusDetailItem(props: PressableProps) {
  return (
    <Pressable onPress={props.onPress}>
      <Center m={3}>
        <Center height={64} alignItems={'center'}>
          <Box
            width={80}
            // height={56}
            bg={'white'}
            borderRadius={16}
            shadow={1}
            p={5}
          >
            <HStack mb={3}>
              <Box _text={{ fontSize: 24, fontWeight: 'bold' }}>베터리</Box>
              <Center
                position="absolute"
                right={0}
                borderRadius={'lg'}
                bg={'blueGray.400'}
                width={'12'}
                height={'6'}
                _text={{ color: 'white', fontWeight: 'bold' }}
              >
                완료
              </Center>
            </HStack>
            <VStack>
              <Box _text={{ fontSize: 16, fontWeight: 'bold' }}>인증구분</Box>
              <HStack alignItems={'center'}>
                <Icon as={Entypo} name="dot-single" size="4" />
                <Text>전기 안전확인</Text>
              </HStack>
              <HStack alignItems={'center'}>
                <Icon as={Entypo} name="dot-single" size="4" />
                <Text>전기 안전확인</Text>
              </HStack>
            </VStack>
            <Box bg="gray.400" mt={5} h={2 / 3} w="100%" />
            <VStack mt={5}>
              <Box>
                <Text>진행일자 : {'2023-01-01'}</Text>
              </Box>
              <Box>
                <Text>진행일자 : {'2023-01-01'}</Text>
              </Box>
              <Box>
                <Text>확인일자 : {'2023-01-01'}</Text>
              </Box>
            </VStack>
          </Box>
        </Center>
      </Center>
    </Pressable>
  )
}

export default ProjectStatusList