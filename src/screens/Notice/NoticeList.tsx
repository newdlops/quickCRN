import {
  Center,
  Box,
  HStack,
  VStack,
  ScrollView,
  Text,
  Pressable,
} from 'native-base'
import React from 'react'
import { PressableProps } from 'react-native'
import { useGetNoticesQuery } from '../../service/notice'
import { toDateForm } from '@utils/dateformatter'
import { Notice } from '../../type'

function NoticeList(): React.JSX.Element {
  const { data } = useGetNoticesQuery('', {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  })
  return (
    <ScrollView>
      {data?.msg?.map((v, i) => (
        <NoticeDetail key={i} data={v} />
      ))}
      <Box h='100px' />
    </ScrollView>
  )
}

interface NoticeDetailProps extends PressableProps {
  data: Notice
}

function NoticeDetail({ data, onPress }: NoticeDetailProps) {
  const notice = data
  return (
    <Pressable onPress={onPress}>
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
                {notice.title}
              </Box>
            </HStack>
            <VStack>
              <Box _text={{ fontSize: 16, fontWeight: 'normal' }}>
                {notice.content}
              </Box>
            </VStack>
            <Box bg='gray.400' mt={5} h={2 / 3} w='100%' />
            <VStack mt={5}>
              <Box>
                <Text>공지일자 : {toDateForm(notice.createdAt)}</Text>
              </Box>
            </VStack>
          </Box>
        </Center>
      </Center>
    </Pressable>
  )
}

export default NoticeList
