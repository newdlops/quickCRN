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
import { useGetNoticesQuery } from '../../service/notice'
import { toDateForm } from '@utils/dateformatter'
import { IRequestInformation } from '../../type';

function NoticeList({ navigation }): JSX.Element {
  const { data, isLoading, error } = useGetNoticesQuery('',{
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  })
  return (
    <ScrollView>
      {data?.msg?.map((v, i) => (
        <NoticeDetail
          key={i}
          data={v}
        />
      ))}
      <Box h='100px' />
    </ScrollView>
  )
}

function NoticeDetail(props: PressableProps) {
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
                {data.title}
              </Box>
            </HStack>
            <VStack>
              <Box _text={{ fontSize: 16, fontWeight: 'normal' }}>{data.content}</Box>
            </VStack>
            <Box bg='gray.400' mt={5} h={2 / 3} w='100%' />
            <VStack mt={5}>
              <Box>
                <Text>공지일자 : {toDateForm(data.createdAt)}</Text>
              </Box>
            </VStack>
          </Box>
        </Center>
      </Center>
    </Pressable>
  )
}

export default NoticeList
