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
  ScrollView,
} from 'native-base'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function SearchProductDetailScreen({route}): JSX.Element {
  const data = route.params.data
  return (
    <>
      <ScrollView>
        <Center>
          <Center height={64} alignItems={'center'} mt={2}>
            <Box
              width={80}
              height={56}
              bg={'white'}
              borderRadius={16}
              shadow={1}
            />
          </Center>
          <VStack h="500" w="300" bgColor="primary.100">
            <Box>내용{data?.category}</Box>
            <Box>인증구분</Box>
            <Box>전기용품</Box>
            <Box>품목</Box>
          </VStack>
        </Center>
      </ScrollView>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        // label="문의하기"
        icon={
          <Icon
            as={MaterialCommunityIcons}
            name="account-question"
            color="primary.200"
            size="6"
          />
        }
      />
    </>
  )
}

export default SearchProductDetailScreen
