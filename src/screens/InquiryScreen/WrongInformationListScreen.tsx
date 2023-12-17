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
import { findByUser } from '../../api/project'
import { useSelector } from 'react-redux'
import { useFindProjectByUserIdQuery } from '../../service/project'
import { useFindInquiriesByUserQuery } from '../../service/inquiry'
import { toDateForm } from '@utils/dateformatter'
import { IRequestInformation } from '../../type';
import { useGetWrongInformationByUserQuery } from '../../service/wronginfo'

function WrongInformationListScreen({ navigation }): JSX.Element {
  const loginUserInfo = useSelector(state => state.user.user)
  const { data ,isLoading, error} = useGetWrongInformationByUserQuery(loginUserInfo._id, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  })
  console.log(data)
  return (
    <>
      <ScrollView>
        {data?.msg?.map((v, i) => (
          <InquiryDetail
            key={i}
            data={v}
          />
        ))}
        <Box h='100px' />
      </ScrollView>
      {/*<Fab*/}
      {/*  renderInPortal={false}*/}
      {/*  shadow={3}*/}
      {/*  size="sm"*/}
      {/*  bg="blue.500"*/}
      {/*  // label="문의하기"*/}
      {/*  icon={*/}
      {/*    <Icon*/}
      {/*      as={MaterialCommunityIcons}*/}
      {/*      name="account-question"*/}
      {/*      color="white"*/}
      {/*      size="6"*/}
      {/*    />*/}
      {/*  }*/}
      {/*/>*/}
    </>
  )
}

function InquiryDetail(props: PressableProps) {
  const data: IRequestInformation = props.data
  return (
    <Pressable onPress={props.onPress}>
      <Center m={3}>
        <Center alignItems={'center'}>
          <Box
            width={80}
            // height={56}
            bg={'white'}
            borderRadius={16}
            shadow={1}
            p={5}
          >
            <HStack mb={3}>
              <Box _text={{ fontSize: 18, fontWeight: 'bold' }}>
                {data.productName}
              </Box>
            </HStack>
            <VStack>
              <Box _text={{ fontSize: 16, fontWeight: 'normal' }}>{data.content}</Box>
            </VStack>
            <Box bg='gray.400' mt={2} h={2 / 3} w='100%' />
            <VStack mt={2}>
              <Box _text={{ fontSize: 16, fontWeight: 'normal' }}>{data.reply ?? '아직 등록된 답변이 없습니다.'}</Box>
            </VStack>
            <VStack mt={5}>
              <Box>
                <Text>문의일시 : {toDateForm(data.createdAt)}</Text>
              </Box>
            </VStack>
          </Box>
        </Center>
      </Center>
    </Pressable>
  )
}

export default WrongInformationListScreen
